'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "84f36076f52c2028e3c7a3c718d405cc",
"assets/AssetManifest.bin.json": "b33128ef4779ddde79a7c8af77ab358f",
"assets/AssetManifest.json": "54cbca861545c7745b147bc6bc7133a4",
"assets/assets/images/achilles.png": "243fd34a2a7b77225afa42dc5d0becff",
"assets/assets/images/apple.svg": "fec0f260c16db05f110098a78ec38fc8",
"assets/assets/images/appointment.png": "203003b2c846e2afde9126a12b39aa31",
"assets/assets/images/back.svg": "1460ff6d524ec0f1de976a44d553bbb7",
"assets/assets/images/blog.svg": "7a6c264707177073e35206cd04f7c079",
"assets/assets/images/blogImage.png": "a001790e416dcae5a4ed3d8242dc4641",
"assets/assets/images/cart.svg": "08edc80dd136242633f2a215c9f5c3fb",
"assets/assets/images/direction.svg": "5225c282958d6557bdcc8e9546922d3d",
"assets/assets/images/doctor.png": "3a5270af445b9e765d03d863d1d28657",
"assets/assets/images/doctorBackground.png": "203003b2c846e2afde9126a12b39aa31",
"assets/assets/images/edit.svg": "04ccfc0c5a853a75d10f610c76b43d97",
"assets/assets/images/editImage.png": "cac57e11783992cf81cf51636b20d4e6",
"assets/assets/images/editImage.svg": "384040a374f85c025c0fc5eda47d6e9e",
"assets/assets/images/google.svg": "94dcb304dec10f6690de1268fd6fd9ad",
"assets/assets/images/gps.svg": "c79bc4e4b2e325bce60d49b6b187a8f3",
"assets/assets/images/home.svg": "c7dae44f94ffa074624b67d748230ee8",
"assets/assets/images/icon.png": "25a3de1c9b95d0bec18499b59d2121b0",
"assets/assets/images/location.svg": "0d8fb158244c911a1b0fc6a2dcbd6e87",
"assets/assets/images/logo.png": "a36d4686d0ab556d41f7effa9c8057f9",
"assets/assets/images/map.png": "6a2d386217a8be5322a0921c810ff4c2",
"assets/assets/images/next.svg": "2bb8fda2b2dbfaf024b1570e49993177",
"assets/assets/images/pain.png": "7a8c675e8954f6c0511253df1091d7a2",
"assets/assets/images/pinLocation.svg": "0bc43fe9c229b276ad12951812e73199",
"assets/assets/images/profile.svg": "d36c0b2ff269f37400e991e485335bf0",
"assets/assets/images/schedule.svg": "c25a09e0fb9497c6d9179132590ebba8",
"assets/assets/images/service.png": "c4cc79e2b7e7346a3741172cb273cb3a",
"assets/assets/images/star.svg": "340b86f67086616e81ae681137472031",
"assets/assets/images/store.svg": "3ea3c383b1962e0f78ddd2b953ec3808",
"assets/assets/images/time.svg": "5616750403c1d74a742243384b1ca619",
"assets/assets/images/topLogo.png": "9396b67e8ff0f0560c1224225135841e",
"assets/assets/images/treatment.png": "3790c60b2f7a24a6b3aa62cc50391836",
"assets/assets/images/user.png": "140591db7ce0e09fcda5d88fb6dc9234",
"assets/assets/images/webDoctor.png": "de0a8b432e2ffd0c298f444969bcb554",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "78c92cd430d5653dd916872bfc82d0ff",
"assets/NOTICES": "46bfd2173cbbac1af907d8b89b0b4efc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "d34414858d4bd4de35c0ef5d94f1d089",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7461b9421b208d45ab1f0840087fd5ed",
"/": "7461b9421b208d45ab1f0840087fd5ed",
"main.dart.js": "f43a52c549bed318113d48b7163c0a6d",
"manifest.json": "ee2d541eee95929d7d8a6460f51d6bd8",
"version.json": "e2ed705b048660530d4757fd8aa25482"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
