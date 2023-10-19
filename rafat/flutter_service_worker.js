'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/config": "921bbae8a65e3d2f2ec76cd732b8b40a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "445b30d5f95c132b2731144564a67ccf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "05ba1618a295b7b58ba0cca6c8461953",
".git/logs/refs/heads/main": "b4e636879cedcd9506f2f8128d359aa4",
".git/objects/02/b848afb6af83376480d95efa0228e4dd591994": "b9930d1ae1ef825df23eb7e0ff44a7ca",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/83ebbcb2ffa2618cd68ef85229200a7c741296": "904c653a8356517346ad65eda6530719",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/b28f12399a4c9fa961ccdc819619288cb21f82": "ac790dd3aa3794f67299fe07e3480295",
".git/objects/19/abfb3aa5cd9cf93ac7ece54b3dfd6293789db5": "7298612e4fe8cc1335105962844b3205",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/33/9e811ec090d3c1fa47c66d898c0f1e62135bdb": "ca821c22bb54cee4eed48167b898a609",
".git/objects/33/a5be580fc7f7d5a199c68f96bb30a1a449c9ab": "d9a6c740582e5ec674eb9ce2aac6566b",
".git/objects/34/9480b9fc419dcd5a9ea8e7b936bcf945c6af11": "e8720dfe0b048ef887e95278d33058d3",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/de774108ef2a8ae7226294d555adef94c2ed05": "80a844799b46e8b0e48942902922f492",
".git/objects/3a/e06346f7c89d90e8815558587e8ab60d5bb816": "f49492cd849da7d0fe3c1a09043d073a",
".git/objects/40/b95e07f455d0a27851c4191cdd45cc8bea38e7": "c3f42c0cd05ea13175f77a92651bd039",
".git/objects/45/875d72bbcf18ce89ce3d4989055df708a87eea": "f95ee51f13efc46f8bedb44817a628a9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/a39ac97dc178c562ca74a8f9f9e74abfda1247": "075ae8c556a48cc68e509485f971bfb0",
".git/objects/4b/0ce7be7394dffbe70c128f7566c333bd6be8f0": "6d87ab76758fe90215aa98385312ab6a",
".git/objects/4b/fd0b7d4ea434e598d08c29be00622abada9120": "f63b448530046dd3b354a76b8506d56e",
".git/objects/4e/1c153560d730f7ce94c9e5c1b2a26877a34540": "ce00ec329952c980b9d93044bf4c7980",
".git/objects/4f/0ce37d2bd29ece82cad96e46bb7833facd4dcc": "fe0eeb8e4fde05653b0f3fa4e73b9f3c",
".git/objects/50/4d7a82764329ef78d66687c1927c31d18fd76a": "ee09fb0f9f8aa06e52e5d9d332b29580",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/4a1fcb5b5684534ec204bcf6d768b5ab8fc10e": "704233deb7e2f4fee9a48dafe4f502a9",
".git/objects/53/bac3e73d533bc78a0b814dbd4ed8c9b91bac46": "f200af3ba8c4384a90de25996348a95c",
".git/objects/56/2cfb574854bbe71a403798c31d397cac7ece58": "5504b460281f974143d394804106b1fb",
".git/objects/5b/3ddda09cc021abe610d010b7d27eec317fa9fd": "205c5ec4af040488fd36d83cd140d702",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/c8eca996b8465a2ba646ecf5fa9121b4392e51": "e129bc5c8bc4376cd1537fdcef5c1d3c",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/8c/821d438946159a8901518c16933905b5c9ab70": "dd014693557d58daf723072e788588e4",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/97/63db38177fd612c67123e4b8921837d6595db8": "518dd2c2ee8e7f4f643ddeb72e710fb7",
".git/objects/a1/7de55d515aa86e3f48f946ac1a0daadbc8ad88": "217b71e2b2d197ff516e9e201cacabb1",
".git/objects/a2/3b9b6eaab018f8ec96e79b30308780bed6d7c2": "2fc56f92a0576efa03eac726d617b8ee",
".git/objects/a2/dc29428edc070277c6a946e9134b52cb200fe7": "b63357d736a1965d6b4e232538d4423b",
".git/objects/a9/7874a60f6d6ef9c0bc1ce3c03a204c0f5e3012": "379abbc51acd2ea7c85d69d3a72723a2",
".git/objects/a9/931d0931f62c5e1c057b4efa7aa6982e6bd3c3": "bb17b56393ece99e62f8dd62f58257a7",
".git/objects/aa/78bc5552622c515bb8325a012f25c3973495c3": "703344930462dca5db4cf243ec590cdd",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/c2fe4dfe20a913b30cb869757d31b4f33b215c": "42d54f149e055045ead42c43571fc365",
".git/objects/b8/4ddba8fbf9a841b21df516f6f50931d5585259": "61d06501ccb8251dd0edb7ba84410531",
".git/objects/ba/88fabee7422c88dcdd7a329e5507a9a9319bc5": "18bc12a63cd6b980c414ffbd797bd55e",
".git/objects/bb/4291c2987ee87797a5456fe79cf0e4c6c78d0e": "45a0318e82c04adc8cf3905df696d22a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/6a6d28cbe7d6631cc7ad9f24cecf50c853dc08": "b80546ecf0c77040bc742428cbe0c472",
".git/objects/bf/a778b4144209510305ce18d7a2c67eeb976ae5": "9dc285a40b6f8c4112d625c0527c25e0",
".git/objects/c2/8b0a580b422847a00d74bdff687a4be89b9951": "8aaa946b8d4627d1a284225ee248502d",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/c8/5606a901a18caefdd5ec7615f2c61d76ea0476": "9acbce9cb4e692269d27129bebc4690c",
".git/objects/d0/0baa698c358eb9cbe378ae1cd286df644d380b": "d07c366f80ee12d79517e4b526ba91a6",
".git/objects/da/e5c93b91f6692e32f3af70b347e9156e672e63": "dcfd605dd9cb23b7fcdc95941c2b5494",
".git/objects/dd/de4d854a8e37b8074b54f707d5fb0ce9652457": "e14c3f40b570f1edfe785d439f68ea09",
".git/objects/df/29a2c2ae98dc8b8cc36bd809c24c465ae9422e": "0bc50c8b5fc9bf9471005a4a8c5162ad",
".git/objects/e1/27e61669adcde8c7bc166f58cba1bc32354d48": "a0b05d95fa3dbf3973ef88f278831cee",
".git/objects/e1/87314a254c4f4c07eaa60c8c2f3a1b4f359a1c": "ce519ab39b3a710deed2b1efa21d67b7",
".git/objects/e1/b48f49343f4f36d6f37fc9bda759f3fce36b2c": "83f0248a5534fdf05e4fdb218c859d69",
".git/objects/e2/ae6aeb6f1cab7ea6ce1a16b65dc00ea138c60e": "fc28ecbbbe2502ae6b0dc8277aa6d42b",
".git/objects/e6/7121ada6b92245c8e6ca120ae3cf5c1d3702b2": "035687e1d6fdca9a88983c1d3047ac93",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e9/f980e5edbadb81ffacfe85ddf024ca66080d9b": "4a1d50122f556f7f80723b0ed08b8a7d",
".git/objects/ec/2b81502ab7acf997bc953085f89a33635bfa4f": "fb9a1462d47c2761c00409cd3ac92ae2",
".git/objects/ee/92561bf82e8e050a80c22b85f68b6688c98c95": "e8778b56a636a3b8f33ffa5fd4f063d3",
".git/objects/ef/4167c2b95462b962c22576dea29badb49bb941": "15e040e57f8c28742d83e823dd2d9ccc",
".git/objects/f2/a9515be4f7c3a3deca89178eb8fb07e274da63": "fcc65c2d09229c8de31b0758d414c35f",
".git/objects/f3/b57ffaa73c697b5f1a674304e3dc53f8a0c994": "d45c7c21e73b67ff67f1cbd618a360c2",
".git/objects/f6/1507241891818f59eaa0cbed80917e570314c1": "dd4b47a2052e354a9c2be8ecdad80e50",
".git/objects/f9/5066cb85348898f78b176f8634876a7b4809cb": "58281e2a59d35986c59e4e1c42980f78",
".git/objects/f9/ec6885cb0419e84e3023c24ed87bf939e98745": "27b310fd0b100621a1b9949a18648fc9",
".git/objects/fb/f69460cdb3e2a465202390cd376c7fd291e9ed": "8b96d9abe6e3b4313fb171c5b9f11f8b",
".git/refs/heads/main": "da978202ac5a4fa71a09739b5b9da455",
"assets/AssetManifest.bin": "94268cb86f97e71e23b5ffcf733b27cf",
"assets/AssetManifest.json": "86b74a1a582c2482202c649c9aef7e78",
"assets/assets/images/accounts.svg": "e71d24541b632e1ef17b980a2ade84b6",
"assets/assets/images/add.svg": "8ea1ef81b44f96d54b5585cdbc7d4da7",
"assets/assets/images/addNew.svg": "056d1de899a929e9de358e5a520a94b5",
"assets/assets/images/admin.svg": "2f96f5896e71f7563834f6bbfc8cb1c3",
"assets/assets/images/arrowUp.svg": "f52cd4e7a4b8f0d7659b1d558cc30ed9",
"assets/assets/images/cardHome.png": "7ffd3ae9d8d56982c5352ad14553ccb0",
"assets/assets/images/cardHome.svg": "7918c59cf736637aa59f22361693d19e",
"assets/assets/images/celsius.svg": "f6ef0ab854cf04bad4ead9d268ea32ca",
"assets/assets/images/cloud.png": "b326315f5b53cd17e931d3265e37eb2f",
"assets/assets/images/cloud.svg": "a72c0bc74a024557c7b270bbf27368fc",
"assets/assets/images/cloudy.svg": "4a3e0357cbb534b3334f210dd1ae21c9",
"assets/assets/images/delete.svg": "759fbd302fe77dccc371286da056cb34",
"assets/assets/images/dropDown.svg": "a1c10ceb60a8cdebe39f2874f0af6a3a",
"assets/assets/images/edit.svg": "f21dfc5148fbec2cfdfc2e174880bb13",
"assets/assets/images/edit_profile.svg": "61133119641c99df252a7d835291a134",
"assets/assets/images/ellipse.svg": "26b47dc4e061140a54be353aaa2f915d",
"assets/assets/images/email.svg": "81610ba5168412400dd1d22b9f8bb3ab",
"assets/assets/images/emp_type.svg": "134a4616feb6a1af8eedd76bb225fc61",
"assets/assets/images/forward.svg": "cda16c636a9b9698681e9cae10763c76",
"assets/assets/images/license_type.svg": "62000dde01afc65421ba477aa2ae276b",
"assets/assets/images/location.svg": "8ca266f51551f4dccfc64d8484ebb081",
"assets/assets/images/logo.png": "94fbee54f0271a46283c7d2b9562502a",
"assets/assets/images/logo.svg": "9b547ca218d8bca3f79c628de05cf9fd",
"assets/assets/images/logout.svg": "4cd0523ee9bad4d730d606609dac79a1",
"assets/assets/images/map.png": "cfc6bb66e66ba2f72a9e2bd6d298e938",
"assets/assets/images/menu.svg": "f8bd91848f5ebec7c9f35cd4fa03fbf7",
"assets/assets/images/message.svg": "f1ad8ca781dfa96526cf764a78975e84",
"assets/assets/images/next.svg": "d931c3ef8883622776ee44c52f44fb8b",
"assets/assets/images/password.svg": "f3938b9e9b2e1f33751a85604134bad6",
"assets/assets/images/person.png": "b8652b119ac8689bc7965f49dea8ffd9",
"assets/assets/images/pervoius.svg": "2dab5715e1566fabf60b1f712fadc9f7",
"assets/assets/images/phone.svg": "f69f32d0c3198da5eab4741febd03b9f",
"assets/assets/images/profile.svg": "673620d0b472d89ee6f1dd90f6465e8a",
"assets/assets/images/profileBig.svg": "09afa6ac33d521a672cc7ab4917fe007",
"assets/assets/images/search.svg": "a49184da0b8d00fd7b83de1c9adcd918",
"assets/assets/images/sorting.svg": "e0b91d2d958e87b09929eff6f2335294",
"assets/assets/images/toggle.svg": "d2f74c9eb3f18f1917ea0ad5bcb7a56b",
"assets/assets/images/videoDisplay.png": "97823afb776ce739ea2cdaad6d4be7d6",
"assets/assets/images/videoPlay.png": "c770d1f2ae6864e4592ada4ac19fe774",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f82d16e4eeeeea03f3b70a761c563eb5",
"assets/NOTICES": "a03fa3134dabcd5bbecf79f6b8b1ec95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "fc8b65b1bf54fe6710c9b60c7e0a3373",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "7532fdb546edb157b751e94e9d5b5839",
"icons/Icon-512.png": "fc8b65b1bf54fe6710c9b60c7e0a3373",
"icons/Icon-maskable-192.png": "7532fdb546edb157b751e94e9d5b5839",
"icons/Icon-maskable-512.png": "fc8b65b1bf54fe6710c9b60c7e0a3373",
"index.html": "bf7fab064968d9f05f454dc7032fecc1",
"/": "bf7fab064968d9f05f454dc7032fecc1",
"main.dart.js": "af538f8752c23d01aee0017c6412681e",
"manifest.json": "ffb94335cbbb0e68379dfbeb71321ae8",
"version.json": "1e4b96e3cc23285d1fb52d8bf8a053ae"};
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
