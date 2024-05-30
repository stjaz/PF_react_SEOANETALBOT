
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjzKxB0JFc19bSEgJBs1aU2syPdCv8cbI",
    authDomain: "ihreproiect.firebaseapp.com",
    projectId: "ihreproiect",
    storageBucket: "ihreproiect.appspot.com",
    messagingSenderId: "916446668982",
    appId: "1:916446668982:web:3ba2f5df49068d71431e17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database= getFirestore(app);