// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meetoo-sc.firebaseapp.com",
  projectId: "meetoo-sc",
  storageBucket: "meetoo-sc.appspot.com",
  messagingSenderId: "239129099751",
  appId: "1:239129099751:web:6c84e4988dd7d475525142",
  measurementId: "G-7TG1B5TB5M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
