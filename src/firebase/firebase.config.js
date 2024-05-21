// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJLuQmPwBlBwz3eHtP5pe81Ww1m17Gmbk",
    authDomain: "doctors-portal-c1372.firebaseapp.com",
    projectId: "doctors-portal-c1372",
    storageBucket: "doctors-portal-c1372.appspot.com",
    messagingSenderId: "433425091510",
    appId: "1:433425091510:web:258b6d92cf31ea81b24f17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app