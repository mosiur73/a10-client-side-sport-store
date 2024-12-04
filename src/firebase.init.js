// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSS6q4AMO-XrBTNOIzA87DCni8saZEgJ0",
  authDomain: "assignment-lotus.firebaseapp.com",
  projectId: "assignment-lotus",
  storageBucket: "assignment-lotus.firebasestorage.app",
  messagingSenderId: "754339283792",
  appId: "1:754339283792:web:5b30985dd68ab51cece255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)