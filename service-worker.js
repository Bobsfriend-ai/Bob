self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('bob-cache').then(cache => {
      return cache.addAll(['.', 'index.html', 'style.css', 'main.js']);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});