'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "790cf1f67e8d931a49f5a7109b3b582d",
"assets/AssetManifest.bin.json": "cd6f705a93279f63031c362d431d73fc",
"assets/AssetManifest.json": "bc37e155976cbc4d3e8f6a3187e8456c",
"assets/assets/images/arrowBack.svg": "48c40adee1588447a0afd2d1fd11cdd0",
"assets/assets/images/arrowForward.svg": "1e4eb61e78ea466b440428184e118ce9",
"assets/assets/images/bench1.png": "858c735441eab0332ed8a16e133eb875",
"assets/assets/images/blackout.svg": "f139f501ad3af2c15430631f7bbb13d4",
"assets/assets/images/bookingHistory.svg": "68f6cb36b736b269de5ff87984308fa4",
"assets/assets/images/calendar.svg": "48073682a34107f056bb4be922dac5db",
"assets/assets/images/camera.svg": "d70e68a35a109fe5afbe9b3c851cb6bd",
"assets/assets/images/cashier.svg": "5b35696dac6f338c45b35abd8be7fde8",
"assets/assets/images/currentPlan.svg": "c5398e4fe105d9fa193dbdbf7548c82c",
"assets/assets/images/dashboard.svg": "834cb8459decffa6f6d630bf2060593c",
"assets/assets/images/dropdown.svg": "9cd75f51ac7d36165b616cb5c9fe23e7",
"assets/assets/images/editProfile.svg": "40fe97e033d93bfcf978808c76a96e60",
"assets/assets/images/email.svg": "482be7643b01be0f838586049c62c335",
"assets/assets/images/emailNotification.svg": "74ffb86fd40eed9196c880fcfbbcaf54",
"assets/assets/images/google.svg": "1908d50b5d221fea8f5bd8ba7f00fe48",
"assets/assets/images/home.svg": "ba84650fc996865f1678f87bfabf6de7",
"assets/assets/images/icon.png": "35867d973cfb42dd98cd4f3e117ea65e",
"assets/assets/images/logo.png": "b2b045cb59cb9518a24a6faf9c08e726",
"assets/assets/images/logout.svg": "1b65cfeafa88d91dca776e03da5f3b2f",
"assets/assets/images/membership.svg": "612495039066ef52aaf7ec0e9b4f2963",
"assets/assets/images/menu.svg": "c225b62579adbc5a928b22941794b713",
"assets/assets/images/notification.svg": "950391dd58a80348a48c07dbb3916b8f",
"assets/assets/images/offerings.svg": "628ff3e2228b548a5ab8135a58ed82be",
"assets/assets/images/profile.svg": "5dcccd7d59663daddda32effd1c9efad",
"assets/assets/images/recurring.svg": "ab7abdaaecb547c8d7d9f585e06a9d90",
"assets/assets/images/setting.svg": "134355f1ac1a5a281cb956dccffcbafe",
"assets/assets/images/upload.svg": "902165dfe4a2c636feecce61cc25ac93",
"assets/assets/images/userRequest.svg": "8fb0e1ed4bd9af03868d439058cf3b07",
"assets/assets/images/view.svg": "18980060124ca0a861ad5f8ac4f9d055",
"assets/assets/images/wallet.svg": "8847af782320da7835fa2b1204172630",
"assets/assets/images/whatsapp.svg": "29e50fcd2dfbecb8cc1714e720b919b3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e5b779fbe54f7678e3b12c59d6fa8200",
"assets/NOTICES": "dd8bb74fe95a13d458b118c043859585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "188b9a14d2e4ed9d57ad9c730e86cd92",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ca1ebc3796dbc29429def935ac6c34b4",
"icons/Icon-192.png": "195163123fafb5603f3a3d6aa65f18e4",
"icons/Icon-512.png": "f975300293bb95b24cdf5e4285bf64bb",
"icons/Icon-maskable-192.png": "295defeedee941c29b4b70f79c4b276b",
"icons/Icon-maskable-512.png": "976928b61f728b915a0a4d672224a46d",
"index.html": "a638dec2932d0c47a108336c1f5e586e",
"/": "a638dec2932d0c47a108336c1f5e586e",
"main.dart.js": "3a71060f91fc52ba151802a77aa31ffe",
"manifest.json": "c18353e0c98058d2c7ac36529f954d3d",
"version.json": "c794a28a74934c38750d85f38d6a7705"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
