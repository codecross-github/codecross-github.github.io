'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bd5a1016729a4e8673fcaa09e7c45698",
"assets/AssetManifest.bin.json": "82dd1a71bd5d1c0c8c876ad6a75b9c4d",
"assets/AssetManifest.json": "264e37fce9c3643ee53067053f7b5132",
"assets/assets/accountManagement.svg": "4d9c94998d233a13375c5ee6502de17d",
"assets/assets/activeCalendar.svg": "4ee9b0cd37db7714c9329fe30294210f",
"assets/assets/activeChat.svg": "7bfd93c7d577c69eb029b48a5216c374",
"assets/assets/activeClient.svg": "945bf0146332f02eea42d0108151c528",
"assets/assets/activeSettings.svg": "8fd23e936b18912625e01815e3447fa2",
"assets/assets/apple.png": "273abc2f4d5f30e4e50c308bd8305f52",
"assets/assets/articleManagement.svg": "31038a070acc50eb0c16905c12835a1d",
"assets/assets/calendar.svg": "35a06ad61cb3b728ec7d5f7e7eaadb3c",
"assets/assets/challengeManagement.svg": "6fecdc4b2e3b888c8a26da154b5d7348",
"assets/assets/chat.svg": "bab533f9459fd4342fb07cd3065c1988",
"assets/assets/client.svg": "04e96227a4c992283e7af32dfa97d2ce",
"assets/assets/companyManagement.svg": "e776e32c03f7514f427f09e259f2bf12",
"assets/assets/delete.svg": "213f0d7a8bd383736e5c80e828d8110b",
"assets/assets/dropDown.svg": "ceab2d2cad4831c98ad463086ff01ba8",
"assets/assets/edit.svg": "003f12e92c3fe101a43b7be745122265",
"assets/assets/egg.png": "669c5dddf50aa37f4b9e6f72209bd75d",
"assets/assets/filter.svg": "857751681e826b0a9ebd5f28d35159e0",
"assets/assets/logo.png": "80a0cae0d875f0ac67f8672791901f03",
"assets/assets/logo.svg": "bee864a7ac32fb9af0bed74a96f93e1a",
"assets/assets/notifications.svg": "947af230ab2135282cfc52943fc17fe9",
"assets/assets/personPic.png": "c20400dc03852d6288b03e0facf5e49f",
"assets/assets/reporting.svg": "7f50968d36f9aec8e89be297c6f7016a",
"assets/assets/search.svg": "9884a7e016cc2ad7dbc18bc9df854801",
"assets/assets/selectedAccountManagement.svg": "626bc4c5024cf26a42b495bfefb4901e",
"assets/assets/selectedArticlesManagement.svg": "fb0b5c4c8a58efc74097d618d0c28229",
"assets/assets/selectedCalendar.svg": "4ee9b0cd37db7714c9329fe30294210f",
"assets/assets/selectedChallengeManagement.svg": "3f24c8d2740a7341cd4b30c195833e21",
"assets/assets/selectedCompanyManagement.svg": "0102fcd42fdd6244dd0779b6c89e209e",
"assets/assets/selectedReporting.svg": "9748ca4785fb94d55457e2b2e9b2c220",
"assets/assets/selectedSupport.svg": "1f13f8fca3c49c1062b0416db3207dd3",
"assets/assets/sendMsg.svg": "018eb62da2c164c6a5573ea50c1d10a6",
"assets/assets/settings.svg": "f43158ed1f870d768e693392ba16f1b7",
"assets/assets/support.svg": "37dd0b9584629dd6686ea4356383e498",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c42cc3d2fcbdc3875bfd9ca250970594",
"assets/NOTICES": "594f1bc304bf87264c6e835c33a991de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "8ab170ca4dd6c8f52f05cf3f5d78d240",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ebbfaeba91eb2c2f594a30ba8838ce8a",
"/": "ebbfaeba91eb2c2f594a30ba8838ce8a",
"main.dart.js": "3a7a288033591fa693cc21fd2be4f73b",
"manifest.json": "b53f0c545ccab0d0f66bef4abfe3972c",
"version.json": "474de509ee9082d38deb8ac76cf548d3"};
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
