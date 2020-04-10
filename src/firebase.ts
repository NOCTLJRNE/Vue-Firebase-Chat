import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBBdWrBrY2IPXVfHDcR-puPyW8WBJJQh74",
  authDomain: "vue-firebase-chat-app-a8952.firebaseapp.com",
  databaseURL: "https://vue-firebase-chat-app-a8952.firebaseio.com",
  projectId: "vue-firebase-chat-app-a8952",
  storageBucket: "vue-firebase-chat-app-a8952.appspot.com",
  messagingSenderId: "606544086499",
  appId: "1:606544086499:web:818806478def4d4b1dccd6",
  measurementId: "G-60QBCEF71Z",
};
// Initialize Firebase
const firebaseInstance = firebase.initializeApp(firebaseConfig);
export const db = firebaseInstance.firestore();
export const auth = firebaseInstance.auth();
export const storage = firebaseInstance.storage();
