// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGsyTUrEDyppvAYLIJWgg1TqEH5kycYGE",
  authDomain: "netflixgpt-262a6.firebaseapp.com",
  projectId: "netflixgpt-262a6",
  storageBucket: "netflixgpt-262a6.appspot.com",
  messagingSenderId: "945693697988",
  appId: "1:945693697988:web:88008d9774605fe2e9e691",
  measurementId: "G-05YYK2G8YN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
