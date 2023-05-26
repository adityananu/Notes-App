// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw12F08xwlx3SRfV6jaBJ9jAhnfNaR6kQ",
  authDomain: "notesapp-e5078.firebaseapp.com",
  databaseURL: "https://notesapp-e5078-default-rtdb.firebaseio.com",
  projectId: "notesapp-e5078",
  storageBucket: "notesapp-e5078.appspot.com",
  messagingSenderId: "812371324203",
  appId: "1:812371324203:web:bcd540f17477c520dea96e",
  measurementId: "G-ZJQVLGFKZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);