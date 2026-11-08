"""Minimal CDP driver for verifying the PWA offline behaviour.

Usage:
  python pwa_check.py online            # launch edge, load app, report SW + cache state
  python pwa_check.py offline           # same profile, server must be down, report render

Uses a persistent profile at %TEMP%\edgeprof-cdp so state carries across runs.
"""
import json
import os
import subprocess
import sys
import tempfile
import time
import urllib.request

import websocket

EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
PORT = 9333
PROFILE = os.path.join(tempfile.gettempdir(), os.environ.get("PWA_PROFILE", "edgeprof-cdp"))
APP = "http://127.0.0.1:8765/index.html"
SHOT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)))


def http(path):
    with urllib.request.urlopen(f"http://127.0.0.1:{PORT}{path}", timeout=5) as r:
        return json.loads(r.read().decode("utf-8"))


class Page:
    def __init__(self, ws_url):
        self.ws = websocket.create_connection(ws_url, timeout=30)
        self.mid = 0

    def send(self, method, **params):
        self.mid += 1
        self.ws.send(json.dumps({"id": self.mid, "method": method, "params": params}))
        while True:
            msg = json.loads(self.ws.recv())
            if msg.get("id") == self.mid:
                if "error" in msg:
                    raise RuntimeError(f"{method}: {msg['error']}")
                return msg.get("result", {})

    def js(self, expr, wait=True):
        r = self.send(
            "Runtime.evaluate",
            expression=expr,
            returnByValue=True,
            awaitPromise=wait,
            timeout=20000,
        )
        if r.get("exceptionDetails"):
            return {"error": r["exceptionDetails"].get("text"), "detail": r["result"].get("description")}
        return r["result"].get("value")

    def goto(self, url, settle=1.2):
        self.send("Page.enable")
        self.send("Page.navigate", url=url)
        time.sleep(settle)

    def shot(self, path):
        data = self.send("Page.captureScreenshot", format="png")["data"]
        import base64

        with open(path, "wb") as f:
            f.write(base64.b64decode(data))
        return path


PROBE = """(async () => {
  const out = {};
  out.secure = window.isSecureContext;
  out.hasSW = 'serviceWorker' in navigator;
  const regs = await navigator.serviceWorker.getRegistrations();
  out.regs = regs.map(r => ({scope: r.scope, active: !!r.active, state: r.active && r.active.state}));
  out.controller = navigator.serviceWorker.controller ? navigator.serviceWorker.controller.scriptURL : null;
  const keys = await caches.keys();
  out.caches = keys;
  out.entries = {};
  for (const k of keys) {
    const c = await caches.open(k);
    out.entries[k] = (await c.keys()).map(r => new URL(r.url).pathname);
  }
  out.modes = document.querySelectorAll('.mode').length;
  out.title = document.title;
  out.tabbar = !!document.getElementById('tabbar');
  return out;
})()"""


def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "online"
    url = sys.argv[2] if len(sys.argv) > 2 else APP
    args = [
        EDGE,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=470,980",
        f"--user-data-dir={PROFILE}",
        f"--remote-debugging-port={PORT}",
        "--no-first-run",
        "--no-default-browser-check",
    ]
    if url.startswith("https"):
        args.append("--ignore-certificate-errors")
    args.append("about:blank")
    proc = subprocess.Popen(args, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    try:
        for _ in range(60):
            try:
                http("/json/version")
                break
            except Exception:
                time.sleep(0.3)
        page = None
        for _ in range(40):
            targets = [t for t in http("/json/list") if t["type"] == "page"]
            if targets:
                page = Page(targets[0]["webSocketDebuggerUrl"])
                break
            time.sleep(0.3)
        if page is None:
            print("no page target")
            return 1
        page.goto(url, settle=1.5)
        drill = None
        if mode == "drill":
            page.js("document.querySelector('[data-act=\"daily\"]').click()")
            time.sleep(0.8)
            drill = page.js("""(() => {
              const q = document.querySelector('.qhead');
              const opts = [...document.querySelectorAll('.opt')].map(o => o.textContent.trim().replace(/\\s+/g,' '));
              const stem = document.querySelector('.stem, .qstem, .q-text');
              return {head: q && q.textContent.trim().replace(/\\s+/g,' '), opts, stem: stem && stem.textContent.trim().slice(0,80), omr: document.querySelectorAll('.omr-cell').length};
            })()""")
            state = page.js(PROBE)
        elif mode == "online":
            # let the SW install + precache, then reload so the page is controlled
            for _ in range(30):
                state = page.js(PROBE)
                entries = state.get("entries") or {}
                total = sum(len(v) for v in entries.values())
                if total >= 11:
                    break
                time.sleep(0.5)
            page.goto(url, settle=1.5)
            state = page.js(PROBE)
        else:
            time.sleep(1.0)
            state = page.js(PROBE)
        shot = page.shot(os.path.join(SHOT_DIR, f"shot-cdp-{mode}.png"))
        print(json.dumps({"state": state, "drill": drill, "shot": shot}, ensure_ascii=False, indent=2))
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=8)
        except Exception:
            proc.kill()
    return 0


if __name__ == "__main__":
    sys.exit(main())
