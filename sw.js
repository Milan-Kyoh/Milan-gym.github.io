/* Milan Routine — service worker (offline app-shell) */
const CACHE = 'milan-routine-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  /* Navigaties: network-first (updates direct zichtbaar), val terug op cache offline */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put(req, cp)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  /* Overige assets: cache-first met netwerk-fallback en runtime-cache */
  e.respondWith(
    caches.match(req).then((hit) =>
      hit || fetch(req).then((r) => {
        const cp = r.clone();
        caches.open(CACHE).then((c) => { try { c.put(req, cp); } catch (_) {} });
        return r;
      }).catch(() => hit)
    )
  );
});
