// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDym18GePgrbjGLovjTxbw7620dkFu8Hpg",
  authDomain: "fir-practice-by-rs.firebaseapp.com",
  projectId: "fir-practice-by-rs",
  storageBucket: "fir-practice-by-rs.appspot.com",
  messagingSenderId: "1051763391975",
  appId: "1:1051763391975:web:0654d92388d6667d961142",
  measurementId: "G-63ET73JG37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export{
    getAuth,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged
}