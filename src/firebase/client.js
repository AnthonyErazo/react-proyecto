// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const apiKey = "AIzaSyAO2DlhkIRa7m33VJPZTGNxaO2ja57Phus";
const authDomain = "clothingurban-9c235.firebaseapp.com";
const projectId = "clothingurban-9c235";
const storageBucket = "clothingurban-9c235.appspot.com";
const messagingSenderId = "1031597994612";
const appId = "1:1031597994612:web:c31117c87b51de381a5721";
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app);
export const storage = getStorage(app);