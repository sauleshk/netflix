// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID ,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER ,
  appId: process.env.REACT_APP_APP_ID ,
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyDXdxUMnAQ5MVzfCx2q0TkeZkDdFq2Z14A
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-b73da.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-b73da
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-b73da.appspot.com
// REACT_APP_MESSAGING_SENDER=212217447357
// REACT_APP_APP_ID=1:212217447357:web:3bd406c727110a28adc8d4  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)