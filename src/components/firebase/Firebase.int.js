// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHCDF_7yfwGhMK2X2ezjO7YUE7cLtPajw",
  authDomain: "tony-robbins-da9e7.firebaseapp.com",
  projectId: "tony-robbins-da9e7",
  storageBucket: "tony-robbins-da9e7.appspot.com",
  messagingSenderId: "452936557598",
  appId: "1:452936557598:web:1c9bf6fe342c7f5d0a7a0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
