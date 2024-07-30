'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bc1089d09e0b06de78d949e40dd1c187",
"assets/AssetManifest.bin.json": "a2b38578268ccaf9a7230c3eaa77ba31",
"assets/AssetManifest.json": "070b70f82644d9807fca1d3f993173b2",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/images/action.svg": "7fbf5f6fabd82bc4a74647f9bcce9c2e",
"assets/assets/images/appointment.svg": "ea3ff8b32d05d829fd5b8ddc4d418214",
"assets/assets/images/bookings.svg": "ea3ff8b32d05d829fd5b8ddc4d418214",
"assets/assets/images/bottomRect.png": "4c716e2c58545f0fc9bdf936e51a7ffb",
"assets/assets/images/clientProfile.png": "5e2e048cd66adfe000269c0aa1ab2df6",
"assets/assets/images/clients.svg": "7f2947a2505653d55a3274ea287d10a9",
"assets/assets/images/dashboard.svg": "52e886b2e1690d5dc008b8d2d221600d",
"assets/assets/images/delete.svg": "8217497624e35c174bef851a2c0ca878",
"assets/assets/images/edit.svg": "0fa51f4de7e18a68e95854bece201cac",
"assets/assets/images/image.svg": "1c6e14b48b5c8a05698d18eac06d6f3a",
"assets/assets/images/list.svg": "1e28cfe1339e51e376192658f7df3440",
"assets/assets/images/logo.svg": "cd50651c0b9a50955bcb2a5eab5791ee",
"assets/assets/images/logout.svg": "2186278a1bfb8b42ed7d2bb8b5e3728a",
"assets/assets/images/notification.svg": "073fe63ca2b2409a828e21e75d150a79",
"assets/assets/images/pause.svg": "d1aa28f4def8f6caa10089bf7f25ee95",
"assets/assets/images/photo.png": "4d27222de916d9f3139fd1be0d161ef5",
"assets/assets/images/profile.png": "74c46e28e68a6ff0e52efdf2e89a3e35",
"assets/assets/images/profile.svg": "1c59e93713dc04c5584e5d2ba20cebc1",
"assets/assets/images/pullLeft.svg": "22e58eb6890c17669392d64404ed86ee",
"assets/assets/images/serviceLeft.png": "423be84702e78e18188a27b0578a8a7a",
"assets/assets/images/serviceRight.png": "ef13d97f8126c8ab5c170dd081b1eb5a",
"assets/assets/images/services.svg": "f2d530ea84e5d8f868c86d8ee455cbd0",
"assets/assets/images/setting.svg": "b459fbe0eb57d91dad3d0b283c8fcc22",
"assets/assets/images/team.svg": "b6af01cb0e7d3a946e22b2a563e09d94",
"assets/assets/images/teamPhoto.png": "b92f96b72a2227f64112929fdc765315",
"assets/assets/images/timeline.svg": "e98544af7c34916b7c1b87d01a876233",
"assets/assets/images/topCircular.png": "c23d3dc22d9ff02bc07daaf755bfc533",
"assets/assets/images/user.png": "7c60ee90165e2f5263183bf00753d862",
"assets/assets/images/user.svg": "07079e90285737a7be3533f1aa839ffa",
"assets/FontManifest.json": "b3a6a0c894441f10e37f1611b62c2ec2",
"assets/fonts/MaterialIcons-Regular.otf": "98f0391f05a2bf6cf215a7a84ace457a",
"assets/fonts/MaterialIcons-Regular.ttf": "b9968c1adf542baec8d2b298d3ff437c",
"assets/NOTICES": "6f3d29cfc6110a7c0521b99bb0c844bd",
"assets/packages/country_picker_plus/assets/countries.json": "749b93bc81bc59bfe645ed591805ac4d",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
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
"favicon.png": "5832d587fad3f1d88ec868eac0baa725",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "59d9db7c99e65d78d29ae1f80221debc",
"icons/Icon-192.png": "255a8f95f39ebab68e0a6a423e7ba19b",
"icons/Icon-512.png": "f17b3700bc12ecdd246ed0fadcb7b4f5",
"icons/Icon-maskable-192.png": "79061d3664a384f7d2e18a6f366eaf14",
"icons/Icon-maskable-512.png": "f17b3700bc12ecdd246ed0fadcb7b4f5",
"index.html": "b9ef66353cfe4803386424f392c90210",
"/": "b9ef66353cfe4803386424f392c90210",
"main.dart.js": "05c09be24268922ee18d9a374d8de152",
"manifest.json": "d7bffa8ef637370eb19c990d8f686cb0",
"version.json": "99d53be570f3d7ad6c2e3380378118d1"};
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
