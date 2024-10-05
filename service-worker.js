var GPATH = '/40k-battle-buddy';

var APP_PREFIX = '40k-battle-buddy-';     // Identifier for this app (this needs to be consistent across every cache update)

var VERSION = 'version_01';         // Version of the off-line cache (change this value everytime you want to update cache)

var CACHE_NAME = APP_PREFIX + VERSION;

var assets = [                            // Add URL you want to cache in this list.
    GPATH + '/',                     // If you have separate JS/CSS files,
    GPATH + '/index.html',            // add path to those files here
    GPATH + '/manifest.json',
    GPATH + '/icons/icon-192x192.png',
    GPATH + '/icons/icon-512x512.png',

]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        cache.addAll(assets)
      })
    )
  })