importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCkcKaQjOoknwRBVAVU7B9RSuGy23ZyLXI",
    authDomain: "maxxitech-f73cf.firebaseapp.com",
    projectId: "maxxitech-f73cf",
    storageBucket: "maxxitech-f73cf.appspot.com",
    messagingSenderId: "23146168208",
    appId: "1:23146168208:web:a29a65a9b61e8f31d1bd15",
    measurementId: "G-H161EMPWZK"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});