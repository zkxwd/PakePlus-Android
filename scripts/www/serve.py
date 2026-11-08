"""Local server for the C quiz PWA.

Why this file exists
--------------------
Service Workers (and therefore "add to home screen + works offline") only run in a
*secure context*.  http://127.0.0.1 counts as secure, http://<LAN-IP> does not — so the
plain `python -m http.server` on your WiFi address gives you the site but no offline
cache.  This script serves the same folder over HTTPS with a locally generated
certificate authority, which Chrome on the phone accepts once you install `certs/ca.cer`.

Usage
-----
    python serve.py            # https://<lan-ip>:8443  (PWA / offline capable)
    python serve.py --http     # http://<lan-ip>:8765   (plain, no service worker)
    python serve.py --port 9000

First run writes:
    certs/ca.key, certs/ca.pem      local CA (keep ca.key private, it never leaves this PC)
    certs/ca.cer                    DER copy to install on the phone
    certs/server.key, certs/server.pem   leaf cert for every detected LAN IP + localhost
"""

from __future__ import annotations

import argparse
import datetime as dt
import functools
import http.server
import ipaddress
import os
import socket
import ssl
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CERTS = ROOT / "certs"


# --------------------------------------------------------------------------- certs
def local_ips() -> list[str]:
    ips: list[str] = []
    try:
        for info in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET):
            ip = info[4][0]
            if not ip.startswith(("127.", "169.254.")) and ip not in ips:
                ips.append(ip)
    except OSError:
        pass
    # extra candidates that a phone on the same WiFi commonly uses
    for probe in ("8.8.8.8",):
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        try:
            s.connect((probe, 80))
            ip = s.getsockname()[0]
            if ip not in ips:
                ips.append(ip)
        except OSError:
            pass
        finally:
            s.close()
    return ips


def ensure_certs() -> tuple[Path, Path, Path]:
    try:
        from cryptography import x509
        from cryptography.hazmat.primitives import hashes, serialization
        from cryptography.hazmat.primitives.asymmetric import rsa
        from cryptography.x509.oid import ExtendedKeyUsageOID, NameOID
    except ImportError:
        raise SystemExit(
            "需要 cryptography 才能生成证书：\n"
            "    python -m pip install cryptography\n"
            "（也可以用 --http 跳过 HTTPS，但那样手机上不能离线使用）"
        )

    CERTS.mkdir(exist_ok=True)
    ca_key_p, ca_pem_p, ca_cer_p = CERTS / "ca.key", CERTS / "ca.pem", CERTS / "ca.cer"
    srv_key_p, srv_pem_p = CERTS / "server.key", CERTS / "server.pem"
    ips = local_ips()
    san_wanted = sorted(set(["127.0.0.1", "localhost", *ips]))
    stamp = CERTS / "san.txt"

    stale = (
        not (ca_key_p.exists() and ca_pem_p.exists() and srv_key_p.exists() and srv_pem_p.exists())
        or not stamp.exists()
        or stamp.read_text(encoding="utf-8").strip() != "\n".join(san_wanted)
    )

    if stale:
        print("[certs] generating local CA + leaf certificate …")
        now = dt.datetime.now(dt.timezone.utc)
        ca_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
        ca_name = x509.Name(
            [
                x509.NameAttribute(NameOID.COMMON_NAME, "C Quiz Local CA"),
                x509.NameAttribute(NameOID.ORGANIZATION_NAME, "C Quiz"),
            ]
        )
        ca_cert = (
            x509.CertificateBuilder()
            .subject_name(ca_name)
            .issuer_name(ca_name)
            .public_key(ca_key.public_key())
            .serial_number(x509.random_serial_number())
            .not_valid_before(now - dt.timedelta(days=1))
            .not_valid_after(now + dt.timedelta(days=3650))
            .add_extension(x509.BasicConstraints(ca=True, path_length=None), critical=True)
            .add_extension(
                x509.KeyUsage(
                    digital_signature=True,
                    key_cert_sign=True,
                    crl_sign=True,
                    content_commitment=False,
                    key_encipherment=False,
                    data_encipherment=False,
                    key_agreement=False,
                    encipher_only=False,
                    decipher_only=False,
                ),
                critical=True,
            )
            .sign(ca_key, hashes.SHA256())
        )

        srv_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
        alt: list[x509.GeneralName] = []
        for name in san_wanted:
            try:
                alt.append(x509.IPAddress(ipaddress.ip_address(name)))
            except ValueError:
                alt.append(x509.DNSName(name))
        srv_cert = (
            x509.CertificateBuilder()
            .subject_name(x509.Name([x509.NameAttribute(NameOID.COMMON_NAME, san_wanted[-1])]))
            .issuer_name(ca_name)
            .public_key(srv_key.public_key())
            .serial_number(x509.random_serial_number())
            .not_valid_before(now - dt.timedelta(days=1))
            .not_valid_after(now + dt.timedelta(days=825))
            .add_extension(x509.SubjectAlternativeName(alt), critical=False)
            .add_extension(x509.BasicConstraints(ca=False, path_length=None), critical=True)
            .add_extension(
                x509.ExtendedKeyUsage([ExtendedKeyUsageOID.SERVER_AUTH]), critical=False
            )
            .sign(ca_key, hashes.SHA256())
        )

        ca_key_p.write_bytes(
            ca_key.private_bytes(
                serialization.Encoding.PEM,
                serialization.PrivateFormat.TraditionalOpenSSL,
                serialization.NoEncryption(),
            )
        )
        ca_pem_p.write_bytes(ca_cert.public_bytes(serialization.Encoding.PEM))
        ca_cer_p.write_bytes(ca_cert.public_bytes(serialization.Encoding.DER))
        srv_key_p.write_bytes(
            srv_key.private_bytes(
                serialization.Encoding.PEM,
                serialization.PrivateFormat.TraditionalOpenSSL,
                serialization.NoEncryption(),
            )
        )
        srv_pem_p.write_bytes(srv_cert.public_bytes(serialization.Encoding.PEM))
        stamp.write_text("\n".join(san_wanted) + "\n", encoding="utf-8")
        print(f"[certs] done, SAN = {', '.join(san_wanted)}")

    return ca_cer_p, srv_key_p, srv_pem_p


# --------------------------------------------------------------------------- server
class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript; charset=utf-8",
        ".json": "application/manifest+json; charset=utf-8",
        ".webmanifest": "application/manifest+json; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".svg": "image/svg+xml",
        ".png": "image/png",
    }

    def end_headers(self) -> None:
        # never cache the shell aggressively; the service worker owns caching
        if self.path.endswith(("sw.js", "index.html", "manifest.json")) or self.path in ("/", ""):
            self.send_header("Cache-Control", "no-cache")
        self.send_header("Service-Worker-Allowed", "/")
        super().end_headers()

    def log_message(self, fmt: str, *args) -> None:  # quieter default logging
        sys.stderr.write("[%s] %s\n" % (self.log_date_time_string(), fmt % args))


def serve(port: int, use_https: bool) -> None:
    handler = functools.partial(Handler, directory=str(ROOT))
    httpd = http.server.ThreadingHTTPServer(("0.0.0.0", port), handler)
    scheme = "http"
    if use_https:
        ca_cer, srv_key, srv_pem = ensure_certs()
        ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        ctx.load_cert_chain(certfile=str(srv_pem), keyfile=str(srv_key))
        ctx.minimum_version = ssl.TLSVersion.TLSv1_2
        httpd.socket = ctx.wrap_socket(httpd.socket, server_side=True)
        scheme = "https"

    print()
    print(f"  客观题库 · C语言  —  {scheme}://127.0.0.1:{port}/index.html")
    if scheme == "https":
        for ip in local_ips():
            print(f"  手机（同一 WiFi）：{scheme}://{ip}:{port}/")
        print()
        print("  第一次在手机上用，要先装根证书：")
        print(f"    1. 把 {ca_cer} 传到手机（微信/QQ/数据线/USB 均可）")
        print("    2. Android：设置 → 安全 → 加密与凭据 → 安装证书 → CA 证书 → 选择 ca.cer")
        print("       iOS：把文件发给手机后，设置 → 已下载描述文件 → 安装，")
        print("            再到 设置 → 通用 → 关于本机 → 证书信任设置 里打开完全信任")
        print("    3. 重新打开上面的 https 地址，浏览器菜单里选「添加到主屏幕」")
        print()
        print("  装好证书后这个地址就是「安全上下文」，Service Worker 才生效，断网也能做题。")
        print("  ca.key 只留在本机，不要外传；删掉 certs/ 目录即可重新生成一套。")
    else:
        print("  （--http 模式：手机可以访问，但 Service Worker 不生效，无法离线）")
    print()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n bye")


def main() -> int:
    ap = argparse.ArgumentParser(description="serve the quiz app over http or https")
    ap.add_argument("--http", action="store_true", help="plain HTTP (no service worker on LAN)")
    ap.add_argument("--port", type=int, default=None, help="override port (default 8443 https / 8765 http)")
    args = ap.parse_args()
    use_https = not args.http
    port = args.port or (8443 if use_https else 8765)
    serve(port, use_https)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
