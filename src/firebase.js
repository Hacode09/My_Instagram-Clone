import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBrQbJ_-MDwoSuPaN9pmrNyrXBJcY6cyVc",
    authDomain: "instagram-clone-4f251.firebaseapp.com",
    projectId: "instagram-clone-4f251",
    storageBucket: "instagram-clone-4f251.appspot.com",
    messagingSenderId: "159725111345",
    appId: "1:159725111345:web:e81bfb24adff9a52856d10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();