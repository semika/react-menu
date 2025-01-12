import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getAnalytics, logEvent } from "firebase/analytics";

//Firebase Config values imported from .env file
const firebaseConfig = {
  apiKey: "AIzaSyCDwYQtMp2dFZ9aaGy5TcA8s5ujFGP6zZM",
  authDomain: "my-first-project-6c51a.firebaseapp.com",
  projectId: "my-first-project-6c51a",
  storageBucket: "my-first-project-6c51a.firebasestorage.app",
  messagingSenderId: "233816787125",
  appId: "1:233816787125:web:b7c15bcd4cb1a5b02956fc",
  measurementId: "G-H16FB6Y2TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and get a reference to the service
export const analytics = getAnalytics(app)

// Messaging service
export const messaging = getMessaging(app);

