// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_wukiV8zBGUKlc-Ae6VosSjr8b5cqINs",
  authDomain: "stone-e62a0.firebaseapp.com",
  projectId: "stone-e62a0",
  storageBucket: "stone-e62a0.appspot.com",
  messagingSenderId: "179849766037",
  appId: "1:179849766037:web:3121a53849600558d8e79c",
  measurementId: "G-9QTN682HTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };