'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7412d22360d64d32db566fca7a701e36",
"assets/AssetManifest.bin.json": "7edcb982f2850bab32ed95f58d767d33",
"assets/AssetManifest.json": "8f597de3807de41b003e9ea098c3e6c8",
"assets/assets/addLocation.svg": "b99b409ba2dfe1141dfe61cf9744e160",
"assets/assets/address.svg": "1bf343bbfb1223fc9100c8a8aacd337e",
"assets/assets/authBackground.png": "afb58e075a7be369b3047aba17dc93d0",
"assets/assets/background.png": "39c5aefbf9fde3b284e3e304a7bba677",
"assets/assets/bigMap.png": "e9b606e89ab27e89c487f958b165f15f",
"assets/assets/blackLocation.svg": "5bd88b7d7c7139af5ee70307ed29605f",
"assets/assets/blueClock.svg": "323c24141d79b399f507402770569d21",
"assets/assets/book.svg": "ce7ac4535f67fd1d421e2cbe55695f33",
"assets/assets/burger.svg": "08ba31b9625933bbf9732715c662461d",
"assets/assets/call.svg": "3b8ad2ddf136a5add1bfab4de6ae4e4c",
"assets/assets/check.svg": "ac109d2af40d942235952783a0633d98",
"assets/assets/clock.svg": "31e5d075df3fe0a508dbd431c5996650",
"assets/assets/companyCover.png": "7a3da36d0d81aabb63c3611e1bc90df3",
"assets/assets/contract.svg": "5273a7b1b0cdc3319a48b72f0d56ad79",
"assets/assets/dog.svg": "ba340daed7ab36b2fa565aad3336e723",
"assets/assets/dropDownIcon.svg": "31e99c811ea27e06f6115c38d6e1d12e",
"assets/assets/email.svg": "42804d3e968b5c19fd9700798324af66",
"assets/assets/experience.svg": "c4fc412cec85f348a528f8880ae2db87",
"assets/assets/family.svg": "f2d5d7d16e069af654020bc5e7814da1",
"assets/assets/filledCircle.svg": "242b9f589870133294fbbe8e1d53f719",
"assets/assets/filter.svg": "41f026a16653440650422892ced6963f",
"assets/assets/flag.svg": "d941e85bc3a89907b3e267aebd446f8a",
"assets/assets/gps.svg": "3ee5d862793c64564127069c1801a34d",
"assets/assets/greyCheck.svg": "76a52277e3266e6558173c3afce35122",
"assets/assets/information.svg": "004af4fee432fb7575fb3bd481f11d30",
"assets/assets/label.svg": "f3c6805e47aeac78389de282993b3c26",
"assets/assets/language.svg": "b7ffe3f6fe428723ffffb3bab53d7e94",
"assets/assets/location.svg": "a994d005ae8676acb3f04a4458eabdde",
"assets/assets/logo.svg": "c5fe59e61bed9e583c58ff5bb6fa5630",
"assets/assets/logoWhiteBackground.svg": "d5e062ab86bced4decab9a593f08f917",
"assets/assets/map.png": "10c7b4ab41e4d0feb276b81ca9dc32de",
"assets/assets/map.svg": "34132e926776b17d1ff35b74f182e377",
"assets/assets/map2.png": "e493953d6b1dc1ce137d38352dc002c3",
"assets/assets/maroonCall.svg": "39b56d044f30aa4e05364fa03f1843a8",
"assets/assets/maroonClock.svg": "788d26870e1993a1e597a5063c4a104c",
"assets/assets/minus.svg": "17f935fe5d51547bffe1f1cd142ebe91",
"assets/assets/new.png": "c631cb271327706ea89174e643bd248c",
"assets/assets/new.svg": "aaf61605bc015a3cff1d65bd15ed9b12",
"assets/assets/paychex.svg": "03f3ba07284d0b3199ed680b1786be1f",
"assets/assets/person.png": "66a20ad7e56214dd89fc89a270369644",
"assets/assets/play.svg": "5d3b25beed8af484069ab37067170021",
"assets/assets/play2.svg": "10fe7e4ae6c00d3a93d4886f789ecf9d",
"assets/assets/plus.svg": "1aa7784a6af0df31c5d92ffe9d24796f",
"assets/assets/profile.svg": "696915f09ed0cf292b4da4dfa03e8d29",
"assets/assets/qmaids.svg": "4c9e44664fd35c50f172493f78517153",
"assets/assets/search.svg": "d02d316ea38dc71aed9a318a696bf0d6",
"assets/assets/serviceNow.svg": "c6c81a8ed6c05cc5d400f5dacc19315d",
"assets/assets/sideBarMenu.svg": "843b987de5b331871592854a5c2eaf64",
"assets/assets/smallLogo.svg": "608dea8c336948416e8d106346bb1b6c",
"assets/assets/teaching.png": "58537f0108cfbb19738354a59e3fbe29",
"assets/assets/teaching.svg": "3603b5f7bcc2459fb470b1e1a5493c90",
"assets/assets/whatsapp.svg": "08026acc069758fcf5773ca1ed67265d",
"assets/assets/whiteBackgroundLogo.svg": "9ec68bc2cc9191e1bdc89b2c797428b1",
"assets/assets/zendesk.svg": "57b32dce47cbd12e606c2af0aa694aa6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "9d209c721dc6f4919eed0531838fc25e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "189750a8f8b56f85405ab71891596b0b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "55294e97cd47171d6465d54dd5d0c742",
"/": "55294e97cd47171d6465d54dd5d0c742",
"main.dart.js": "2410e72e41d9e9c4592d8690a5fc046d",
"manifest.json": "89bd021312828474c8b69e505d580357",
"version.json": "6c1851b85ba9fd194a6596100fc06918"};
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
