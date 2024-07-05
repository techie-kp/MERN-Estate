// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f6782.firebaseapp.com",
  projectId: "mern-estate-f6782",
  storageBucket: "mern-estate-f6782.appspot.com",
  messagingSenderId: "346473298200",
  appId: "1:346473298200:web:322daedf151457fa0a466d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);