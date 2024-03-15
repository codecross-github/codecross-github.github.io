'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fcbfa27599df11ecb0e1e4e35eeb35a8",
"assets/AssetManifest.json": "32857fe0d52b81da819aac8bfd8a58a3",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/images/action.svg": "7fbf5f6fabd82bc4a74647f9bcce9c2e",
"assets/assets/images/bookings.svg": "ea3ff8b32d05d829fd5b8ddc4d418214",
"assets/assets/images/bottomRect.png": "4c716e2c58545f0fc9bdf936e51a7ffb",
"assets/assets/images/clientProfile.png": "5e2e048cd66adfe000269c0aa1ab2df6",
"assets/assets/images/clients.svg": "7f2947a2505653d55a3274ea287d10a9",
"assets/assets/images/dashboard.svg": "52e886b2e1690d5dc008b8d2d221600d",
"assets/assets/images/delete.svg": "8217497624e35c174bef851a2c0ca878",
"assets/assets/images/edit.svg": "0fa51f4de7e18a68e95854bece201cac",
"assets/assets/images/logo.svg": "cd50651c0b9a50955bcb2a5eab5791ee",
"assets/assets/images/logout.svg": "2186278a1bfb8b42ed7d2bb8b5e3728a",
"assets/assets/images/notification.svg": "073fe63ca2b2409a828e21e75d150a79",
"assets/assets/images/photo.png": "4d27222de916d9f3139fd1be0d161ef5",
"assets/assets/images/profile.png": "74c46e28e68a6ff0e52efdf2e89a3e35",
"assets/assets/images/pullLeft.svg": "22e58eb6890c17669392d64404ed86ee",
"assets/assets/images/search.svg": "09f62268fd97223b2b8d7a98d0ee156f",
"assets/assets/images/services.svg": "f2d530ea84e5d8f868c86d8ee455cbd0",
"assets/assets/images/setting.svg": "b459fbe0eb57d91dad3d0b283c8fcc22",
"assets/assets/images/team.svg": "b6af01cb0e7d3a946e22b2a563e09d94",
"assets/assets/images/teamPhoto.png": "b92f96b72a2227f64112929fdc765315",
"assets/assets/images/topCircular.png": "c23d3dc22d9ff02bc07daaf755bfc533",
"assets/FontManifest.json": "d9e056a8a9b63536ee96db7e70c0e67b",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "6302629594c78b833eef1d456312f141",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5832d587fad3f1d88ec868eac0baa725",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "255a8f95f39ebab68e0a6a423e7ba19b",
"icons/Icon-512.png": "f17b3700bc12ecdd246ed0fadcb7b4f5",
"icons/Icon-maskable-192.png": "79061d3664a384f7d2e18a6f366eaf14",
"icons/Icon-maskable-512.png": "f17b3700bc12ecdd246ed0fadcb7b4f5",
"index.html": "f9552af925bfa70f0272c7e6ff8313e7",
"/": "f9552af925bfa70f0272c7e6ff8313e7",
"main.dart.js": "141c32deda905160be1c34fec8e3a71f",
"manifest.json": "2680402c1385e4ebb8d636ce7bb07b14",
"version.json": "8dfd4d4f45a4a9180e769875398326ab"};
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
