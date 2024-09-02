'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ceeea3755643aa44640d8ec72dca5cb2",
"assets/AssetManifest.bin.json": "a48abe829f74be20d8a1c800cfa90067",
"assets/AssetManifest.json": "b6dff37c5c323d8eb35bc1c9b9f168de",
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
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9f2bcb79ec912df3a71ea68578b4e010",
"assets/NOTICES": "5a1884ef82929e785fb290965e0de65c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "188b9a14d2e4ed9d57ad9c730e86cd92",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "176d3512c8a38dc360138b29290ab0d7",
"icons/Icon-192.png": "195163123fafb5603f3a3d6aa65f18e4",
"icons/Icon-512.png": "f975300293bb95b24cdf5e4285bf64bb",
"icons/Icon-maskable-192.png": "295defeedee941c29b4b70f79c4b276b",
"icons/Icon-maskable-512.png": "976928b61f728b915a0a4d672224a46d",
"index.html": "a638dec2932d0c47a108336c1f5e586e",
"/": "a638dec2932d0c47a108336c1f5e586e",
"main.dart.js": "602ec3f31495618c8c22f6dd8f0e6181",
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
