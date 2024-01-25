import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

// Initialize Firebase
const app = initializeApp(
  {
    apiKey: "AIzaSyDqMD5hZOqxhM7cY9D7LprDP24T3V2L2MQ",
    authDomain: "devtasthanam.firebaseapp.com",
    databaseURL: "https://devtasthanam-default-rtdb.firebaseio.com",
    projectId: "devtasthanam",
    storageBucket: "devtasthanam.appspot.com",
    messagingSenderId: "791803858817",
    appId: "1:791803858817:web:c0c2610d003923ab2e2280",
    measurementId: "G-67B3QT3S6G"
  }
)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const messaging = getMessaging(app);
