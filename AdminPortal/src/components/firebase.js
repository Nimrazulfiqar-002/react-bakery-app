

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKbczkJe_y6oPe_lACiRrkPdpoTGkxwmQ",
  authDomain: "react-firebase-auth-emai-1d053.firebaseapp.com",
  projectId: "react-firebase-auth-emai-1d053",
  storageBucket: "react-firebase-auth-emai-1d053.appspot.com",
  messagingSenderId: "47226742769",
  appId: "1:47226742769:web:b127904cfb52c4dd400650",
  measurementId: "G-32YD9MEN6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth();
const analytics = getAnalytics(app);