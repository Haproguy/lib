// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZxadiZKRt7cCtQcCi1sGtYqyjgE5oJ70",
    authDomain: "max-next-66879.firebaseapp.com",
    databaseURL: "https://max-next-66879-default-rtdb.firebaseio.com",
    projectId: "max-next-66879",
    storageBucket: "max-next-66879.appspot.com",
    messagingSenderId: "913499230512",
    appId: "1:913499230512:web:04ea18a592aec6051f78f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);