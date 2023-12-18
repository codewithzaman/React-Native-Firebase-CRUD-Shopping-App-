// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa444w64_ydhi8ZcSOIgSxHR6nlA0bnyI",
  authDomain: "shopping-app-83af2.firebaseapp.com",
  projectId: "shopping-app-83af2",
  storageBucket: "shopping-app-83af2.appspot.com",
  messagingSenderId: "227746885906",
  appId: "1:227746885906:web:5943acbb742a7eebf7c3cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
