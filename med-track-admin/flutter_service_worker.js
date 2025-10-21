'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fc94f5a0d296e64d847b0958eba9f23a",
"version.json": "d5147f4058a022ac973f0bcc9112006c",
"index.html": "c6049b69cf69f87d296cd034e76a1416",
"/": "c6049b69cf69f87d296cd034e76a1416",
"main.dart.js": "78e71710caeeaca46bea08bf69af8613",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "46375eb393b839ac134901fed4830a9e",
"icons/Icon-192.png": "9f84eba69b5a2e8a27eb5474cbee7b08",
"icons/Icon-maskable-192.png": "9f84eba69b5a2e8a27eb5474cbee7b08",
"icons/Icon-maskable-512.png": "c3f8045a27f81b554eaa1d803ac51649",
"icons/Icon-512.png": "c3f8045a27f81b554eaa1d803ac51649",
"manifest.json": "719140d37b737b254e621c4fffa0d8df",
"assets/AssetManifest.json": "f20cfa107b2969a8e290e9fdacdd3773",
"assets/NOTICES": "70720520a582f37a723ca1e8cf209d57",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b1c54099fd07fc9de8c8bc19d9b3abd1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0dba9edf97e6bceee6075723118925aa",
"assets/fonts/MaterialIcons-Regular.otf": "41082b4e2a1eec29c76637bec9b11b4c",
"assets/assets/images/inviteReferral.svg": "8de471ded1f8e8b2c7de3d409501318e",
"assets/assets/images/task.svg": "3fcb94673e1d1be5c8077b4978666053",
"assets/assets/images/bluTick.png": "0c5d34b8614045df663a5b2590f6ce40",
"assets/assets/images/user.svg": "04f6b3a3aa76e8e77d7fa3fa9710857d",
"assets/assets/images/arrow.svg": "7cb971797948e4f2311d6dc50bdbda41",
"assets/assets/images/home.svg": "763d2d63a0fcbce588cccbb42ce5f4ee",
"assets/assets/images/cancel.svg": "de41ae5cd52b62d8a8662a0ec2b9d43b",
"assets/assets/images/doc.svg": "d79499138cd8f6a064013979cdf0afa3",
"assets/assets/images/school.svg": "260927be90b24368f06ad89ba938b193",
"assets/assets/images/circle.png": "0e05b252cde5396c1ffcc72c7d3726e4",
"assets/assets/images/joinReferral.svg": "4a1f3c243e83076752f52a2d3131e34b",
"assets/assets/images/add.svg": "78eacf6d074e6d3c2ae13109db37c9ed",
"assets/assets/images/student.png": "63efb92f0ae51d71f14e9f7dd77ae192",
"assets/assets/images/setting.svg": "c6b003f7ff68b5ad7a6745ca38b3b903",
"assets/assets/images/camera.svg": "08e8de1be04a5c51136bc20b4323c0aa",
"assets/assets/images/delete.svg": "6392055a43c16463dd3404ee74623f74",
"assets/assets/images/clock.svg": "bc7a80914511250dc2474072683c7867",
"assets/assets/images/logo.svg": "b847aea53401b5ae160e9ff3737d5ec9",
"assets/assets/images/timer.svg": "9057fc8b638457046360e302a3b00f6c",
"assets/assets/images/camraLogo.png": "a2e949874a7b8e120c9a4e5e2887116b",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
