const CACHE_NAME = 'mindreply-v1';
const ASSETS = [
  '/',
  '/admin',
  '/manifest.webmanifest',
  '/assets/images/icon-192.png',
  '/assets/images/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
