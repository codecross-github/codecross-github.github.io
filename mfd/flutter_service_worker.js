'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "df41a0b6a2e64f458dfa23aa6e628176",
"assets/AssetManifest.json": "3fdc5d07b5e68dc2af3d6b2e3952de2d",
"assets/assets/arrow_back.svg": "7f80e6827959fcc15768db248aa2b431",
"assets/assets/big_person.png": "a2049f6f13bfbf72915c22e0d78fa17a",
"assets/assets/black_drop_down.svg": "a16d0c3a749f428e446f4769511d27e8",
"assets/assets/calendar.svg": "370bb80dd47734ba8fdde3e462a715ed",
"assets/assets/check.svg": "a4da583c525d4b4e022f1266647baa20",
"assets/assets/chinese.svg": "34223057f34d45156698ecbca866fced",
"assets/assets/contact.svg": "bbd66d03ad18d0c41c5e89a80270b0a0",
"assets/assets/cross.svg": "467b52c50e9d74ddb28e928297e0505a",
"assets/assets/dashboard.svg": "f1db861f97ed6cfc2f686822ec509ce6",
"assets/assets/delete.svg": "37fe1354fa2a9144dee39e39fb64e0b7",
"assets/assets/dots.svg": "17dc9db4eb57b56a4256bd17ace96ec3",
"assets/assets/dropDown.svg": "566173a6bb4733accdbe574f7a86f842",
"assets/assets/edit.svg": "f3dd0773ef7c5d2dd11d0723e3714700",
"assets/assets/empty_checkbox.svg": "79744ed0ce069a58175bee4f4b82f2e6",
"assets/assets/forward_arrow.svg": "b20fb350c0b29ccdc7169c6a590b55f0",
"assets/assets/highlight.svg": "828974372cdd84cd02049716ad2c0383",
"assets/assets/logo.png": "dc41407b4e06c4447eea8f45dcbafc2a",
"assets/assets/logout.svg": "41266c28a07e01cfaa9012d21f456633",
"assets/assets/notifications.svg": "85bef86dfa4c0aa039690a53c3ef4efd",
"assets/assets/orders.svg": "14aa7798cdc1df041a9a12f7e664e3b4",
"assets/assets/person.png": "98fe6dff98e96c352def0998ed82591c",
"assets/assets/person.svg": "b3560c0be33f6b7f9df6b84b2222a5dc",
"assets/assets/profile.svg": "42f55ada25a45a38b6b73d17634d8bcf",
"assets/assets/promotions.svg": "4e039c691a21af2cd2e8e789add8f842",
"assets/assets/purple_drop_down.svg": "761d43933991604a535441de39d13848",
"assets/assets/search.svg": "0ef76e8be1019b38acdfc5c7248bd922",
"assets/assets/SEGOEUI.TTF": "623c7118249e082fe87a78e08506cb4b",
"assets/assets/settings.svg": "64b48a676d4960eff02b15d5d21cfbc4",
"assets/assets/square_person.png": "bd1b9bd11ea0610d6ec2f8e880f235a7",
"assets/assets/updown_arrow.svg": "55bb3a8429c453b7313ffe3465be7c4c",
"assets/assets/users.svg": "9f9a91df1cbea4bd6fef45a6a6e22166",
"assets/assets/visibility.svg": "9a94e2f158c6ab9e9afb3e0b868c4c62",
"assets/FontManifest.json": "39e877089b672bc047d691ece14c94af",
"assets/fonts/MaterialIcons-Regular.otf": "ec56c4db2aa8c997365b6c0a3a09d6d8",
"assets/NOTICES": "36b4f1b08ab9734604949eecefc936d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0a3f47cb193e660d406e96c62652671a",
"/": "0a3f47cb193e660d406e96c62652671a",
"main.dart.js": "bc323ebc99c8f8e687a18b649430ed93",
"manifest.json": "61b16a7cb9e4e96545b811ce086759a9",
"version.json": "585f58d2ab758d8292d1cf097461bb5c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
