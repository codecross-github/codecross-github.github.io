'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "3466cce42522a16766c0d69f5e8ec331",
"assets/AssetManifest.smcbin": "c6b2c7a1e6d5439080440197891092f4",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/images/artists.svg": "a8ccac781f2826710b153cd99b59697e",
"assets/assets/images/back.svg": "7ca15fd8bcfc3a402529c6c520d43831",
"assets/assets/images/bookmark.svg": "46680a9cd7fdeb7a6b4e02e67aa215de",
"assets/assets/images/bookmarked.svg": "c56e1b303fb40fe5aa906acc6fe70273",
"assets/assets/images/bookmarkFilled.svg": "46e09bbcc7f4bd9a70e5eb5a1a243217",
"assets/assets/images/call.svg": "21cc4acd4b73673e6cb8d71b6f65ee27",
"assets/assets/images/clients.svg": "cec99dd194c1f171ab88754b17a35bd8",
"assets/assets/images/coding.svg": "e2cdf4106081fe122c6d2b64cbb3e847",
"assets/assets/images/done.png": "7a53766d2de9f8c2604d20c01518f1e2",
"assets/assets/images/food.svg": "ad2d2b9cc8bd03b943865d3b0aebf214",
"assets/assets/images/holder.svg": "640a8448e216dc93a031a2b82f75f2f5",
"assets/assets/images/home.svg": "63abed29e703abac9d9eeeff5b388f85",
"assets/assets/images/homeFilled.svg": "0ba99f74b0bc1101bb3b93daf902de90",
"assets/assets/images/instagram.svg": "711a581b8624188d50f562ea1591280d",
"assets/assets/images/location.svg": "2575cea5632a2bd33d6d5a80aa747d05",
"assets/assets/images/logo.png": "4786f0c60dde4bfcf6d013c5a531efc0",
"assets/assets/images/others.svg": "31511e0d704e97c9f5541345974d6ca8",
"assets/assets/images/photography.svg": "321105922ce57c0ac10b52425196fd46",
"assets/assets/images/place.svg": "a1105b97adf4cb3d15e1d5c3b67a9b3c",
"assets/assets/images/profile.svg": "4368bae957a4009745925e240ddc1777",
"assets/assets/images/profileFilled.svg": "9f7dde9e3691757d1d71d8811c2a9e49",
"assets/assets/images/schedule.svg": "1fd2bbe1614de342679cc21308356235",
"assets/assets/images/search.svg": "2fb3a715316c06d9b457c9323b7bccbd",
"assets/assets/images/sports.svg": "2d933f0d25702b1f2f672ba6ec82ed6a",
"assets/assets/images/tick.svg": "c3581b4e56d54f32dd1d58ee7b5673dd",
"assets/assets/images/travelling.svg": "f03e4d56b883d635d62dbd08bbe538b2",
"assets/assets/images/unmark.svg": "773bc5fff6e485ce5435cae95bbeed53",
"assets/FontManifest.json": "d9e056a8a9b63536ee96db7e70c0e67b",
"assets/fonts/MaterialIcons-Regular.otf": "af44447cf7aaf5f8d28c7192e40cdd36",
"assets/NOTICES": "27a66e84b945e09777761b0aa4196bcb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/0.75x/powered_by_google_on_non_white.png": "78b06d238cb55fd775d0faefc44448f7",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/0.75x/powered_by_google_on_white.png": "31bc81278fd5b781b342ea1e767d032e",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/1.5x/powered_by_google_on_non_white.png": "a0bdd851f1d00d131f005c60ed2cb16b",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/1.5x/powered_by_google_on_white.png": "c7e713340ff7ad9e1af8482ad2a71349",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/2.0x/powered_by_google_on_non_white.png": "e72d1907bf5d0f6c1153e50aa7cf7f9a",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/2.0x/powered_by_google_on_white.png": "60e8a8323a1f5c9dc59c6783d5974123",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/3.0x/powered_by_google_on_non_white.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/3.0x/powered_by_google_on_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/4.0x/powered_by_google_on_non_white.png": "33ff537622b33a8a161646a7be0800d0",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/4.0x/powered_by_google_on_white.png": "cbb17d77d4436ba71593febe71599b53",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/powered_by_google_on_non_white.png": "27efb6d97555008ec637e8c5a6833f82",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/powered_by_google_on_white.png": "f127e368d62ad92dacab340de5af50e8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "aa4577325a9ac20cf6e0458b8325750d",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "030fe8936fd5e09745b2d0b5f4376564",
"icons/Icon-512.png": "a0f901c70896b277c6f965b839d7535b",
"icons/Icon-maskable-192.png": "a82964d47fbea3036a978af101a2f6e1",
"icons/Icon-maskable-512.png": "a2f33260db6d73d30b060fd53cc78825",
"index.html": "d90219aa2a7e5f018bd4309466096b07",
"/": "d90219aa2a7e5f018bd4309466096b07",
"loading.gif": "eef28b80715707b445d8d2ae8d0fcf19",
"main.dart.js": "bc577b51f81f160b22eaedd7efd15f96",
"manifest.json": "94d09ef7944d0ea22bf24ce5825719e0",
"version.json": "2cbb2fd3f275cf3acd91b32833632af5"};
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
