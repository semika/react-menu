// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
const firebaseConfig = {
    apiKey: "AIzaSyCDwYQtMp2dFZ9aaGy5TcA8s5ujFGP6zZM",
    authDomain: "my-first-project-6c51a.firebaseapp.com",
    projectId: "my-first-project-6c51a",
    storageBucket: "my-first-project-6c51a.firebasestorage.app",
    messagingSenderId: "233816787125",
    appId: "1:233816787125:web:b7c15bcd4cb1a5b02956fc",
    measurementId: "G-H16FB6Y2TC"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});