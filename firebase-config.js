// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuTLhfe5Zc93ni1RJ4E_1aQZZeQh5q2h8",
  authDomain: "carwizz-7bc99.firebaseapp.com",
  projectId: "carwizz-7bc99",
  storageBucket: "carwizz-7bc99.firebasestorage.app",
  messagingSenderId: "510656887444",
  appId: "1:510656887444:web:96cd5f63357f7799249281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);