'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cf655b160ab21d14d11c47cda84e0c79",
".git/config": "c219b7c998ae687290290e3abb00170a",
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
".git/index": "3973ce09a6f9aac8b863e26b82852bb4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18a87c64560048bfb76642a209915d49",
".git/logs/refs/heads/main": "78055d4fe74d1026af1903ac20fbdc47",
".git/logs/refs/remotes/origin/main": "be7243b2822e2ee084613d637bef025a",
".git/objects/00/be8478b4bfd0a0af1eb5908bc276df42ec9aed": "8a736d03ca3b03115a928ad6378974d2",
".git/objects/02/45b1f25bbfbb17768b04bd7beff8af0e73b26f": "fec74e671153d23ac950eb41748d22ba",
".git/objects/02/a54e671ba8e5b13f61a34fc21154954a9949b2": "02dcd805a0f6b8adc81ddfea183ccd6a",
".git/objects/0e/6c56a5385c485156af687279aecabc9dce6598": "10d8abc577784f88a433795c9bdff5fb",
".git/objects/12/2fdf1e93ea592d55bd54545d688d87ce098ada": "3d007341711d0ff62a7330ad642d5f34",
".git/objects/13/a16ea2a06dbfdfd27e20cfdf1f6762830e8ae8": "5fc7ec09c9e806478cf43bd25483d655",
".git/objects/13/c917e9ea423d75ab70ba46f801fe5c3ca457fb": "ed7b1906e9f92b43b8c899ec81856219",
".git/objects/1b/61de73705ae85ef8dc03ecb3f35423107db3da": "ab7daf8a643e969b6c3722ad0d1ebcce",
".git/objects/2e/2d46d73e8d08df22a002772a1a9ad8a7cfcbb0": "b58b60c67546c71e15bd76b5677983da",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/39/ab389774ca52684ff1ae624fcbcebb102d00fe": "4bf7ac4f85cd682e4b142c81863e7e0a",
".git/objects/3a/8edfb35a1f57d5066b1a65ba1287d38ea1f58d": "aee7b31bab36acc020978e56f10745ec",
".git/objects/3a/97e29c0688343d0e9c8067d5791fbad81b3754": "a79d058d5881b2c23f4b3b3f379f6d3b",
".git/objects/3b/2a4133bc1c78dfed2b0b8c093ff8d0b7f98a96": "65bc45578a5359ff670518ae7af1616c",
".git/objects/3c/2c1775ba627d348125ae9df7c99e883a9c1b86": "1d9d4e453c4e257d44d2b66ec2e7c6f6",
".git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
".git/objects/3e/4a42537f451c287df0cbc47118238092c891ab": "c76345433c78714064ca9e5493aa2a91",
".git/objects/41/bab5388d18ed09aea12a463188b3c7302103d3": "18317c4c8b2dfa3823b510c8fb585290",
".git/objects/42/815b8c7b857b3e2aef7993e1f72235740f54ac": "61ebff7085f2d686b690e4958ff78199",
".git/objects/43/a153527476d0bef18d448092891bc0ada777ed": "95371bfafe1fa313e64c491c05267707",
".git/objects/46/76cb59bed6aed1afddbf1450e3364a889c578a": "5fee2b35e699824bfb096ac1022b4fa9",
".git/objects/48/3de88493f04b700339e179427ced5aad6b0448": "6eadf72588cc86b0063c98f379af38fe",
".git/objects/4e/a9402516621c40b6584ba0a8e79d914ef47707": "4f021f3e8b7189a80f9b550fbdd38a83",
".git/objects/53/5d8bac3615429ec63d74554c4654f1d9e405f9": "b80aca28857617dff7d6c738f1b6d5dd",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/888f9146d6f343710255aa1964c12360ffaf46": "603f202882dad6ed144cdc45392ad4a7",
".git/objects/57/c5ab038b2c315ac5da9e6bec7cda4e31617701": "5a73c415df75e712b5c1a88e1a3427d6",
".git/objects/64/aee30a4e018ab6a1b4b9d4673c25fbf933574b": "cd9680ae534a1f9b25cb42cdac64386e",
".git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
".git/objects/64/c0277b8e5b493a0630e2b283f1ccfdd72679f9": "5c352972a1fe928c94d64470bab560ad",
".git/objects/67/4a9b1deffeb2f7915ebe286d3c27a56b481314": "8c1100f01bc2162d13716ef2428ca184",
".git/objects/67/9dc3b7b01f5b73e21e382b59d3321675b7b483": "727e0303c7394fc579bbc6b8c01f6299",
".git/objects/68/9dc0acb0cb362779353150dd9671253aa43f13": "91371a8f5f930d40c653538128f41c66",
".git/objects/69/b8421c1c91bd6566255efe698766c15b31efc4": "9fa28e2ca5bcfac82db6af31351a3ff7",
".git/objects/6c/fe488daebbd8e41e8b542e605ce9f8d27961c7": "b798be67e4b83f7d7974025ccc30bc6c",
".git/objects/72/0c935208a850718504ee23c1916e24a3b3eb22": "c2abadda4ecd51117ba1a7e5e3e7ef0f",
".git/objects/74/9c87172c8eaa7b382c85735c5ae44f87112820": "c05dbf4b078066419551bfcbe619d810",
".git/objects/74/ba4b4efc2ebb3b0581012e036a6f6440949e3e": "178049983c9145a24d98b99aae638548",
".git/objects/77/1d2c785c9bdfd8f3656d9bcae4a0430fb6d066": "81eebff0c02d8f5a897c9c4149c9d071",
".git/objects/77/2e3738df221e5b4ffd200471408af83a9aa452": "f6f824509aae9d121ea11766c9091744",
".git/objects/77/70126c0818f60006077e05daadf538ec09401d": "c377887bd236183e121db349dfd9fb7c",
".git/objects/7a/45804691fbce29efcfc4a9b475c78e648b2664": "95e8f84af194d1fb14d195958390cb83",
".git/objects/7c/6c3b4919064bf21ac28126ac167cf45b80abdc": "57ab56c06a78eb283f76f0fe8ff13100",
".git/objects/7e/abe6b08da22408572377fa34a231379a0ea144": "d22743b2bcadd99a3817aab0fdf554fa",
".git/objects/86/be382a14a61528d734e89b8c73d06c8013d048": "9a2a43c8e4421e3ff2bf03140768ec09",
".git/objects/89/ea8871a7b316985280895a166f70a3aa73414e": "b04b5863f9d470e74e1023e4ad18abe1",
".git/objects/8a/7f4b7def188afd650c448f7805c3d861db8f82": "5dd1a4b8e712abcb1860a1884938b561",
".git/objects/8c/8cd773b84f8afe4cae60fa35ca3f18772183c8": "6a187b29cd3d61cbac10eaea9930a2d5",
".git/objects/8d/4eebf20665d5ae746c622a2bd42274b54d2bf1": "1af37619c66ce985101983d9c8fa0fe3",
".git/objects/8e/82c70d1081e2857ada1b73395d4f42c2e8adc9": "26623a433e72cc0c70229cb55963874c",
".git/objects/95/004efae71abde2b998ffabd3b667ea326c1802": "a35996d5eea6ec1f3359b74ec792b49c",
".git/objects/96/1853925cce8137b25dadffa604d6cbb0890e5b": "d13ef7a94d11deb3a40ccffc5c30ff40",
".git/objects/99/269d80e131bef19b3a909d99a9507aa0a827ca": "3af9d9d7d7eb5112f5abfeeda003e9c3",
".git/objects/9d/1e71c3a15746f4050d0d573186771669a19dae": "f202425872ccb83e93f3c244eb3c7c1b",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/265d8905dd0ab93e4830a461453e1dbdadaa56": "53b92ce8b63b3076d93152d5fa5f4349",
".git/objects/a3/5d05df58b70cf382bc53d57af304cb732dfcf6": "2c028fcfa2bfef765b555d861fec8640",
".git/objects/ab/e091388933c83693d8309dd9c0cff2ecd507ad": "489ea9f211c9a14c3c6af499e32f3564",
".git/objects/b4/e4ecda4023b27f66ae46c360ac0ae4bc2a84be": "ef6666ff8d6d53d2ff2086507ab5cdaa",
".git/objects/b5/3fb1c4acbe100c7a91f07564b7f1fa2d5bab12": "e811d0b34945c5ebde7da923776bcfd5",
".git/objects/b7/023ff333621a6c22a2d2937c8415cd3f357b8d": "b0c23f9441c8d928839e7a83c48cc083",
".git/objects/b7/68f44c8d22b7b3e74f539578db14dd52b19a7e": "52fc4c2364422a0b634ddaac70d4f63d",
".git/objects/b9/50f730c4176b70d8b63f9a64f8580ecca99946": "56292359c5c6434343a0e1979c2e98c4",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/f0666419c74cf42b72bff2cb206b25d72c03d2": "598c425d3f6242f745a5244696e0fd61",
".git/objects/bc/8b476ac59292d86ddce245f71a8bedc0354de6": "65d9b7b80d96c47d5dc20aac37f4b966",
".git/objects/bc/8c24d470b74a00c60e641a260bcdc18cbfa746": "23a3dd6c1728845804f88282cb9c1748",
".git/objects/bd/1dffe7f3cfd4cfe8e5631485bea9fd550a99c7": "16e2d15efa518fd4ea2ee8c4d08d3558",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c4/5ec6d16c212400e32911f81a5b478f0ca14633": "df2d5b8211f8d0950460f6c1ff7db003",
".git/objects/c5/b798323a3a2807bf936f2401d459bdec56bc9c": "ef8a0fa7571095f49575136cb960cf1f",
".git/objects/c6/aeeb16a6d7f754258bc7f3f2101d287976e6e6": "ea0f32909c0e06fc9256a959692bc0d3",
".git/objects/cb/4b8217fc2bc3840eb21d7e8795cc05bf83614c": "d9ed8d1d3a00257f2711e26ca913ca73",
".git/objects/cd/489b9547fd003b9f8430e6015ad1e6e37be220": "8de0518607c4f1c5a6c313272a49b32e",
".git/objects/cd/9137ff033e8076d05d9456b7ead390ab925f2e": "ffa2664da99a8c116f85aba66a9505d8",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/6aae22be4c6ee8436342651bfca5004aa2d347": "6247799aaf7583a3dbb40974b658c35c",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/5b6cd38efa6b8dc0b5e5e785e56e1123fbfde7": "60e4ef03f604b958c8e95ebea3038a74",
".git/objects/dc/91e677f37a6ccd2f98a20de73e56c33e03b7cf": "496e15c44be534b4534b93ab91ffa61f",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/4d2ae6a3f56bc48804e591616c4fa533f9ce24": "3d7cf43be3ca5fa4fbd2b67ecccf89f3",
".git/objects/e1/edbb2d21a3fafdff9b88ebb840b5c5b8c96c63": "44d311bcf3ad25a901c63709a62bf046",
".git/objects/e2/d9c78b84f2f6d2cf6c87faea431774a2dd4307": "682842dbdd586eec6a9bdfee17256d8e",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/b4603600c7be8f1501e46645fdce4570862803": "4ba4bd3b382e29c1c09f34b4d123d7df",
".git/objects/e8/64bd9c3bdc62ec3205f4fe3bd2e72fc325ede1": "7e0ddb27c6263d6a4769e07e192df5d1",
".git/objects/ed/af491a5c26f76837dd3bf1e227b711b38ca0f5": "b0ac7f73affc47eeba4fe03e7f773814",
".git/objects/f2/5260e3edd9c398940174d3b15ae2771ddf4a4b": "cc6e09b2e6f7f40828b97ee3bc8ef807",
".git/objects/f3/188457092d50cdf8154966a56135a98cfa66f9": "69fa55cf9a5d31ac46c2f277bf47c64a",
".git/objects/f4/7864331ca262730696c129772e98d75809a230": "06be5dd718c6a28660a7bdc4acf4f102",
".git/objects/f5/ae5352049a9114f03d95bef7a92f209c00133d": "6e00adecc8e99a224f6f3203874af9f0",
".git/objects/f9/2e8d62766b879febf933271fff0a7b4f103116": "dc86f65366cb29f84a750fae5dae4d6f",
".git/objects/fa/05fe99b9625a89d854cdfa48cc1ea8e2fa7ee7": "1c0449849111eac0b11992832ad6a2f1",
".git/objects/fb/62fbae8551be65a63e9b833833ca64c3d01579": "8f966f52622d5225ffc333cb1479da2b",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/9229b1b8734ef5e6591882494b532ffd6f7d80": "5636ed08a2a53914c5710d3094a1b1a2",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/main": "464b66bfeefdefe70b668cf517802314",
".git/refs/remotes/origin/main": "464b66bfeefdefe70b668cf517802314",
"assets/AssetManifest.bin": "61b472406fe2573e92a7e25966d347bd",
"assets/AssetManifest.json": "3466cce42522a16766c0d69f5e8ec331",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/images/artists.svg": "3c427ebf571318145bfbb91d510c81cd",
"assets/assets/images/back.svg": "9bd0d8aa69d72153042b699e83f57bc5",
"assets/assets/images/bookmark.svg": "a9b70c6051cfe501de0a358ae86c7dca",
"assets/assets/images/bookmarked.svg": "90cef8af725593e8fc24cc827f0cd0cd",
"assets/assets/images/bookmarkFilled.svg": "762ad0d7e083204aadfa002adebb04de",
"assets/assets/images/call.svg": "a4a818761266de678546719bd39e181e",
"assets/assets/images/clients.svg": "19567809c5764c517c1af20585620d91",
"assets/assets/images/coding.svg": "29f63f260bd78db3cbb6c3f673446786",
"assets/assets/images/done.png": "7a53766d2de9f8c2604d20c01518f1e2",
"assets/assets/images/food.svg": "a02e6625035e14a7af4492b4f8cf905b",
"assets/assets/images/holder.svg": "9ba842d0df5b09ec13713b6e5c15804c",
"assets/assets/images/home.svg": "74cf18021e3067731e0bc65fe2ddb1ea",
"assets/assets/images/homeFilled.svg": "34723b31e9daa3a1c524f82d9a498842",
"assets/assets/images/instagram.svg": "08846ec16778d1bf2a92970334290333",
"assets/assets/images/location.svg": "6472adba5b6a528829193b5db80afaff",
"assets/assets/images/logo.png": "623621c4c1e7f88e384841e596e2e881",
"assets/assets/images/others.svg": "18b5bd76e46743ad8f2cb7d59403ee94",
"assets/assets/images/photography.svg": "0f8d72c1e7cb4a39dce07ba4ef2b8732",
"assets/assets/images/place.svg": "4193e870daa8683c5509516975d48e3d",
"assets/assets/images/profile.svg": "7f9236d4a6f0bb6c2d6873552bf17eb3",
"assets/assets/images/profileFilled.svg": "30cab620ccbdbebe3cc19fad1964e33c",
"assets/assets/images/schedule.svg": "624b832995bfcfdc11665ba9451f3a56",
"assets/assets/images/search.svg": "ff5bc94fa1ef9143485ac332251aea5e",
"assets/assets/images/sports.svg": "f81b3ab1a923fa2346516c32f25b3427",
"assets/assets/images/tick.svg": "ce5a253ed9640eb437b33f96ad559cf6",
"assets/assets/images/travelling.svg": "57158c4c3c4864a6846227a9f7b4f101",
"assets/assets/images/unmark.svg": "356ef4da7f9ecf33ba11bdec36956c1d",
"assets/FontManifest.json": "d9e056a8a9b63536ee96db7e70c0e67b",
"assets/fonts/MaterialIcons-Regular.otf": "96531d2b9dedc648d9c103d5769a9bae",
"assets/NOTICES": "ade0c96a60f4b3d46e4c523288a968cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
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
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "54a4ccbda2b20e27f0011efdf3eafc21",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "e995f05942cbefa339bbe5e0604e06b1",
"icons/Icon-512.png": "e8c0a2605b13fdcabaa4227a2043e171",
"icons/Icon-maskable-192.png": "9e5c2b97192f349b44c8f7a9cc6a9fa6",
"icons/Icon-maskable-512.png": "e8c0a2605b13fdcabaa4227a2043e171",
"index.html": "ffd0866681062b0c2013e5b63febb519",
"/": "ffd0866681062b0c2013e5b63febb519",
"loading.gif": "eef28b80715707b445d8d2ae8d0fcf19",
"main.dart.js": "2b4cc7c73963f8cb03bd13e60a65bb2a",
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
