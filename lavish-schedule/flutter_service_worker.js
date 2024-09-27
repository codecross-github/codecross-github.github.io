'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "863da2ab20f0e8168e3fe8c028ba5be0",
"assets/AssetManifest.bin.json": "1ac38a16394aae1c24c8aa914165f870",
"assets/AssetManifest.json": "3d92bc25cc789e6b96a5c8ab15e02bde",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/images/back.svg": "9bd0d8aa69d72153042b699e83f57bc5",
"assets/assets/images/bookmark.svg": "356ef4da7f9ecf33ba11bdec36956c1d",
"assets/assets/images/bookmarkBorder.svg": "a9b70c6051cfe501de0a358ae86c7dca",
"assets/assets/images/bookmarked.svg": "14d9de1664c579187eb86eeecbedea05",
"assets/assets/images/bookmarkFill.svg": "762ad0d7e083204aadfa002adebb04de",
"assets/assets/images/cartBorder.svg": "ef2c531db0e3091623bfd436400fb03b",
"assets/assets/images/cartFill.svg": "b792bffc33cf08b21edd97f44d7fcf56",
"assets/assets/images/done.svg": "53d00716b4aede09bcd9c3555833548e",
"assets/assets/images/find.png": "fb038e33fb0d79bfc9cdeef9671a3629",
"assets/assets/images/homeBorder.svg": "b02d896046dcc62ee0224b1d9ef4b788",
"assets/assets/images/homeFill.svg": "6765791c9c00f358d8256a26af351546",
"assets/assets/images/location.svg": "6472adba5b6a528829193b5db80afaff",
"assets/assets/images/logo.svg": "cb7fe257357cda25f7545666661aa153",
"assets/assets/images/photography.svg": "321105922ce57c0ac10b52425196fd46",
"assets/assets/images/product.png": "c8f9097dbf6db9bcb90fd8ee47a3707f",
"assets/assets/images/professional.png": "13adf47d3d7e41ef03de51f3fc13e114",
"assets/assets/images/profileBorder.svg": "7f9236d4a6f0bb6c2d6873552bf17eb3",
"assets/assets/images/profileFill.svg": "30cab620ccbdbebe3cc19fad1964e33c",
"assets/assets/images/search.svg": "f67c2cc941f7a355bb95e02e92123792",
"assets/assets/images/serviceLeft.png": "423be84702e78e18188a27b0578a8a7a",
"assets/assets/images/serviceRight.png": "ef13d97f8126c8ab5c170dd081b1eb5a",
"assets/assets/images/star.svg": "720e27470d4aca1e3ef28c849af9758e",
"assets/FontManifest.json": "d9e056a8a9b63536ee96db7e70c0e67b",
"assets/fonts/MaterialIcons-Regular.otf": "f39e9acdc4635e68f01ed88ac174595a",
"assets/NOTICES": "43e4fad53e7b31914a2ba17055b4dbd4",
"assets/packages/country_picker_plus/assets/countries.json": "749b93bc81bc59bfe645ed591805ac4d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
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
"favicon.png": "5832d587fad3f1d88ec868eac0baa725",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e1e660d6e346bd32b3b9c4850f5ae719",
"icons/Icon-192.png": "255a8f95f39ebab68e0a6a423e7ba19b",
"icons/Icon-512.png": "f17b3700bc12ecdd246ed0fadcb7b4f5",
"icons/Icon-maskable-192.png": "79061d3664a384f7d2e18a6f366eaf14",
"icons/Icon-maskable-512.png": "f17b3700bc12ecdd246ed0fadcb7b4f5",
"index.html": "cf6f9910f5f467d03b97daed75256225",
"/": "cf6f9910f5f467d03b97daed75256225",
"main.dart.js": "429dc7ed9d3197451e3cc6e84a864225",
"manifest.json": "2001856658fd5929341058c47df52f8d",
"version.json": "edbabd1d9c1fdd7482aee32010c42609"};
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
