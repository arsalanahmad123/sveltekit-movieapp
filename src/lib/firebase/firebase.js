// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyA4P7ugMl-4Wuipoq7ZcyYB6BE0Xvh2Tto",
    authDomain: "sveltekit-83d6c.firebaseapp.com",
    projectId: "sveltekit-83d6c",
    storageBucket: "sveltekit-83d6c.appspot.com",
    messagingSenderId: "141978874572",
    appId: "1:141978874572:web:9b331264861ba9944c4869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }