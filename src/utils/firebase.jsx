
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDym18GePgrbjGLovjTxbw7620dkFu8Hpg",
  authDomain: "fir-practice-by-rs.firebaseapp.com",
  projectId: "fir-practice-by-rs",
  storageBucket: "fir-practice-by-rs.appspot.com",
  messagingSenderId: "1051763391975",
  appId: "1:1051763391975:web:0654d92388d6667d961142",
  measurementId: "G-63ET73JG37",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
