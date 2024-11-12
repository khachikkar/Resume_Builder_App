// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOidktpaZOWXBSrE513yMYZV06krSM9DI",
    authDomain: "resumebuilder-40adc.firebaseapp.com",
    projectId: "resumebuilder-40adc",
    storageBucket: "resumebuilder-40adc.firebasestorage.app",
    messagingSenderId: "355302139181",
    appId: "1:355302139181:web:ed664db5f25f4904125fa4",
    measurementId: "G-SSKZK92G3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


export {
db,
    auth
}

