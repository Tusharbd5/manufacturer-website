// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyCr1LYdqK1OfcEPdO5pNRsHYlJuOrBhpZI",
    // authDomain: "electro-tools-management.firebaseapp.com",
    // projectId: "electro-tools-management",
    // storageBucket: "electro-tools-management.appspot.com",
    // messagingSenderId: "1093177569568",
    // appId: "1:1093177569568:web:8fbfe45be57a3321dfa745",

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;