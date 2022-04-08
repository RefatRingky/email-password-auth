// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwzSWb4m9x2nLeHGPxTDCwZB2lM-gflOk",
  authDomain: "email-password-auth-c7e6e.firebaseapp.com",
  projectId: "email-password-auth-c7e6e",
  storageBucket: "email-password-auth-c7e6e.appspot.com",
  messagingSenderId: "1093647310020",
  appId: "1:1093647310020:web:ffb48bb57c34a73cbebd91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;