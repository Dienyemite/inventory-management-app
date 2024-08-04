// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXovpamEdj5isdzhx09xmuV_YZ3BCOeVM",
  authDomain: "inventory-management-app-ac3f0.firebaseapp.com",
  projectId: "inventory-management-app-ac3f0",
  storageBucket: "inventory-management-app-ac3f0.appspot.com",
  messagingSenderId: "425414138443",
  appId: "1:425414138443:web:1d982be9511b5f02868bce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getFirestore(app);
export { firestore };