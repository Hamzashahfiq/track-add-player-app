// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV1koHnxzFb7YCeBzKEofAljPoO8a4fhE",
  authDomain: "track-player.firebaseapp.com",
  projectId: "track-player",
  storageBucket: "track-player.appspot.com",
  messagingSenderId: "32842623326",
  appId: "1:32842623326:web:80f9c6e518fd10d8df87cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const storage = getStorage(app);