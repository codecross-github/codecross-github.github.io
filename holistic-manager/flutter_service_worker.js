'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4e6ba3bebf59088d387142870466ca79",
"version.json": "086ba2ed569037ff0f1e36d6578cd0dd",
"index.html": "5482a37f536c61a22a49147104580c01",
"/": "5482a37f536c61a22a49147104580c01",
"main.dart.js": "9e83fa792999c21af1da6cfa8045ccd9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cdfba685b32fce7228c62ed16d721965",
"assets/AssetManifest.json": "86a239ade1ba85ed5ad699d2a869840c",
"assets/NOTICES": "c85783c331e64f672d01aa31b8e9af55",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "105fa3ba279773a14abe55f0f9d6561c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "123a75b967edacc35444bf1b76698e31",
"assets/fonts/MaterialIcons-Regular.otf": "b46da7085a267f29079231ac23daddb3",
"assets/assets/search.svg": "a9c4042b41148278ca4b459753d7557a",
"assets/assets/selectedCompanyManagement.svg": "f3dd5721210057745ba0f9985413f9f0",
"assets/assets/companyManagement.svg": "7e3edcd3af7acdccfb72fcb9cfc6a4e2",
"assets/assets/challengeManagement.svg": "8a0caa44d4a3f367d8625be60ccdb1ed",
"assets/assets/selectedAccountManagement.svg": "c4dfa6e14e65262a21390b22870a2aae",
"assets/assets/accountManagement.svg": "9e1e0aafaf55c585731552b5b2b83a8f",
"assets/assets/settings.svg": "533b64f60ca4c0528300616886776f28",
"assets/assets/activeCalendar.svg": "c1f2729ad4a915ef1082c77ddef6395b",
"assets/assets/support.svg": "af21b6240af020d8505e7e132e13a8da",
"assets/assets/reporting.svg": "c31f683aa546505c607175c7b2a974c7",
"assets/assets/activeChat.svg": "24bdfd48385fbf1355bd47b920e0e9ca",
"assets/assets/selectedCalendar.svg": "c1f2729ad4a915ef1082c77ddef6395b",
"assets/assets/apple.png": "273abc2f4d5f30e4e50c308bd8305f52",
"assets/assets/client.svg": "78189212b6158959d0221c59e6c8f82a",
"assets/assets/activeClient.svg": "498f495edd1e9fd516ca10a32be132b1",
"assets/assets/chat.svg": "9c22f44b1c6dac658dd792625fbeccf1",
"assets/assets/personPic.png": "c20400dc03852d6288b03e0facf5e49f",
"assets/assets/logo.png": "80a0cae0d875f0ac67f8672791901f03",
"assets/assets/articleManagement.svg": "e8a51dfeb2908fd5c28cb3b675fd6187",
"assets/assets/selectedSupport.svg": "01e94126a12a68afe93a5c8e2ab5da89",
"assets/assets/edit.svg": "94f6ea2d31f57250f6800869938381ba",
"assets/assets/delete.svg": "2b3f6ed276b7687df40f94015e42b642",
"assets/assets/selectedArticlesManagement.svg": "838ffce6ac14fb7482e33dca03c50c52",
"assets/assets/dropDown.svg": "42067a8e782303110afbfdbbcdddb431",
"assets/assets/filter.svg": "bda189ea9d3ebc44195a85d248a888d0",
"assets/assets/calendar.svg": "a823bc63bbbef2b1bcb81b4d86768da6",
"assets/assets/egg.png": "669c5dddf50aa37f4b9e6f72209bd75d",
"assets/assets/notifications.svg": "085ca9e2196afef4b3bcbf9bc77ad0cf",
"assets/assets/selectedChallengeManagement.svg": "9b27aeb4764a232e5df5c2deb54a6de6",
"assets/assets/logo.svg": "506ffade48961a8f0e477e954b28c078",
"assets/assets/activeSettings.svg": "ba8621e0aed954ad21cbe64687394d9a",
"assets/assets/sendMsg.svg": "c58d57c3ba9bd5078475ce86b1865b6e",
"assets/assets/selectedReporting.svg": "98085acf45244f94caf5e6083998f324",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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