// Import the functions you need from the SDKs you need

// import { serverTimestamp } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6Uy-utRHXd-BdW4MchxxW_s3bAJw2MzI",
    authDomain: "photofolio-3683f.firebaseapp.com",
    projectId: "photofolio-3683f",
    storageBucket: "photofolio-3683f.appspot.com",
    messagingSenderId: "411622140421",
    appId: "1:411622140421:web:849eb81e9d6c252b10ca6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const timestamp = Timestamp.now();

export { projectFirestore, projectStorage, timestamp };
