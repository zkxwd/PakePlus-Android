import ssl
import urllib.request

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

for host in ("127.0.0.1", "10.111.168.20"):
    for path in ("/index.html", "/sw.js", "/manifest.json", "/data.js", "/icon-192.png"):
        try:
            with urllib.request.urlopen(f"https://{host}:8443{path}", context=ctx, timeout=6) as r:
                body = r.read()
                print(host, path, r.status, len(body), r.headers.get("Content-Type"))
        except Exception as e:  # noqa: BLE001
            print(host, path, "ERR", e)
