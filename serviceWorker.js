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
			"cards/10-c.svg","cards/2-c.svg","cards/3-c.svg","cards/4-c.svg","cards/5-c.svg","cards/6-c.svg","cards/7-c.svg","cards/8-c.svg","cards/9-c.svg","cards/a-c.svg","cards/j-c.svg","cards/k-c.svg","cards/q-c.svg","cards/10-d.svg","cards/2-d.svg","cards/3-d.svg","cards/4-d.svg","cards/5-d.svg","cards/6-d.svg","cards/7-d.svg","cards/8-d.svg","cards/9-d.svg","cards/a-d.svg","cards/j-d.svg","cards/k-d.svg","cards/q-d.svg","cards/10-h.svg","cards/2-h.svg","cards/3-h.svg","cards/4-h.svg","cards/5-h.svg","cards/6-h.svg","cards/7-h.svg","cards/8-h.svg","cards/9-h.svg","cards/a-h.svg","cards/j-h.svg","cards/k-h.svg","cards/q-h.svg","cards/10-s.svg","cards/2-s.svg","cards/3-s.svg","cards/4-s.svg","cards/5-s.svg","cards/6-s.svg","cards/7-s.svg","cards/8-s.svg","cards/9-s.svg","cards/a-s.svg","cards/j-s.svg","cards/k-s.svg","cards/q-s.svg",
			"icons/afterburn.svg","icons/cryo-chamber.svg","icons/jetpack.svg","icons/metroid.svg","icons/robot-leg.svg","icons/spoutnik.svg","icons/airtight-hatch.svg","icons/cyborg-face.svg","icons/klingon.svg","icons/missile-mech.svg","icons/rocket-flight.svg","icons/star-gate.svg","icons/alien-bug.svg","icons/defense-satellite.svg","icons/laser-blast.svg","icons/missile-pod.svg","icons/rocket-thruster.svg","icons/starfighter.svg","icons/alien-egg.svg","icons/double-ringed-orb.svg","icons/laser-turret.svg","icons/missile-swarm.svg","icons/rocket.svg","icons/strafe.svg","icons/alien-stare.svg","icons/eclipse.svg","icons/light-sabers.svg","icons/mono-wheel-robot.svg","icons/round-silo.svg","icons/targeting.svg","icons/android-mask.svg","icons/energise.svg","icons/lunar-module.svg","icons/observatory.svg","icons/satellite.svg","icons/techno-heart.svg","icons/astronaut-helmet.svg","icons/energy-tank.svg","icons/mecha-head.svg","icons/power-generator.svg","icons/sentry-gun.svg","icons/tesla-turret.svg","icons/autogun.svg","icons/forward-field.svg","icons/mecha-mask.svg","icons/radar-dish.svg","icons/sinusoidal-beam.svg","icons/ufo.svg","icons/bolter-gun.svg","icons/habitat-dome.svg","icons/mechanical-arm.svg","icons/ray-gun.svg","icons/solar-system.svg","icons/vintage-robot.svg","icons/bubble-field.svg","icons/hazmat-suit.svg","icons/megabot.svg","icons/ringed-planet.svg","icons/space-suit.svg","icons/walking-scout.svg","icons/cannister.svg","icons/jet-fighter.svg","icons/metal-scales.svg","icons/robot-golem.svg","icons/spaceship.svg","icons/zat-gun.svg",
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

