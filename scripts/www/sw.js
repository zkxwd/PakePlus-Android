/* 客观题库 · C语言 — Service Worker
   策略：缓存优先（cache-first）。首屏资源与题库全部预缓存，断网时直接用缓存；
   联网时在后台把新版本写回缓存（同一版本号内不做版本比较，升级请改 VERSION）。 */

const VERSION = '2026-11-08e';
const CACHE = `cquiz-${VERSION}`;

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
];

self.addEventListener('install', (ev) => {
  ev.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // 单个资源失败不应该让整个安装失败：逐个 add，失败的留给运行时缓存
    await Promise.all(ASSETS.map((url) => cache.add(url).catch(() => null)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter((k) => k.startsWith('cquiz-') && k !== CACHE)
      .map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

/* 页面导航：先看缓存里的 index.html，后台顺手更新一份 */
async function handleNavigate(req) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match('./index.html', { ignoreSearch: true });
  const revalidate = fetch(req).then((res) => {
    if (res && res.ok) cache.put('./index.html', res.clone());
    return res;
  }).catch(() => null);
  if (cached) return cached;
  const fresh = await revalidate;
  return fresh || (await cache.match('./index.html', { ignoreSearch: true })) || Response.error();
}

/* 其余同源 GET：缓存优先，未命中再走网络并写入缓存 */
async function handleAsset(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req, { ignoreSearch: true });
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
    return res;
  } catch (err) {
    const fallback = await cache.match(req, { ignoreSearch: true });
    if (fallback) return fallback;
    throw err;
  }
}

self.addEventListener('fetch', (ev) => {
  const req = ev.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  // 开发用的真机预览壳不进缓存
  if (url.pathname.includes('/_dev/')) return;

  if (req.mode === 'navigate') {
    ev.respondWith(handleNavigate(req));
    return;
  }
  ev.respondWith(handleAsset(req));
});

self.addEventListener('message', (ev) => {
  if (ev.data === 'skip-waiting') self.skipWaiting();
});
