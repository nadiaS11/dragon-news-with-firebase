// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG63AsiHCmx6EGz4-SBFzP4aZZ89Os-Zg",
  authDomain: "dragon-news-house.firebaseapp.com",
  projectId: "dragon-news-house",
  storageBucket: "dragon-news-house.appspot.com",
  messagingSenderId: "603597175271",
  appId: "1:603597175271:web:7df39df439347306f26542",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
