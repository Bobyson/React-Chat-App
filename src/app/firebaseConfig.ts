import { initializeApp } from "firebase/app";;
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYXkuS1q23Z8A2nc6d6GQaqJfAR5eVG2s",
    authDomain: "chat-app-70606.firebaseapp.com",
    projectId: "chat-app-70606",
    storageBucket: "chat-app-70606.firebasestorage.app",
    messagingSenderId: "90668045462",
    appId: "1:90668045462:web:28ee9c6c48305035dcdeb7",
    measurementId: "G-C3RT44EJGX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};