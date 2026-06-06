const CACHE_NAME = 'resource-cache';

self.addEventListener('install', function(event) {
	caches.open(CACHE_NAME).then(function(cache) {
		return cache.addAll([
			"data.js",
			"index.html",
			"manifest.json",
			"serviceWorker.js",
			"icon192x192.png",
			"icon256x256.png",
			"icon384x384.png",
			"icon512x512.png",
			"cards/10-c.svg",
			"cards/2-c.svg",
			"cards/3-c.svg",
			"cards/4-c.svg",
			"cards/5-c.svg",
			"cards/6-c.svg",
			"cards/7-c.svg",
			"cards/8-c.svg",
			"cards/9-c.svg",
			"cards/a-c.svg",
			"cards/j-c.svg",
			"cards/k-c.svg",
			"cards/q-c.svg",
			"cards/10-d.svg",
			"cards/2-d.svg",
			"cards/3-d.svg",
			"cards/4-d.svg",
			"cards/5-d.svg",
			"cards/6-d.svg",
			"cards/7-d.svg",
			"cards/8-d.svg",
			"cards/9-d.svg",
			"cards/a-d.svg",
			"cards/j-d.svg",
			"cards/k-d.svg",
			"cards/q-d.svg",
			"cards/10-h.svg",
			"cards/2-h.svg",
			"cards/3-h.svg",
			"cards/4-h.svg",
			"cards/5-h.svg",
			"cards/6-h.svg",
			"cards/7-h.svg",
			"cards/8-h.svg",
			"cards/9-h.svg",
			"cards/a-h.svg",
			"cards/j-h.svg",
			"cards/k-h.svg",
			"cards/q-h.svg",
			"cards/10-s.svg",
			"cards/2-s.svg",
			"cards/3-s.svg",
			"cards/4-s.svg",
			"cards/5-s.svg",
			"cards/6-s.svg",
			"cards/7-s.svg",
			"cards/8-s.svg",
			"cards/9-s.svg",
			"cards/a-s.svg",
			"cards/j-s.svg",
			"cards/k-s.svg",
			"cards/q-s.svg",
		]);
	});
});

const cacheFirst = (request) => {
	return caches.match(request).then((cachedResponse) => {
		if (cachedResponse) {
			return cachedResponse;
		}
		return fetch(request).then((networkResponse) => {
			return caches.open(CACHE_NAME).then((cache) => {
				cache.put(request, networkResponse.clone());
				return networkResponse;
			});
		});
	});
};

self.addEventListener('fetch', (event) => {
	event.respondWith(cacheFirst(event.request));
});

