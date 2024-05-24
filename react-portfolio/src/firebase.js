
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA5TwXk5sz3-mvpsJIRCW86KZMXDBD5FG0",
  authDomain: "portfolio-website-7cff7.firebaseapp.com",
  projectId: "portfolio-website-7cff7",
  storageBucket: "portfolio-website-7cff7.appspot.com",
  messagingSenderId: "961019397614",
  appId: "1:961019397614:web:24b324bdf7b545c3b8faff",
  measurementId: "G-VMY1WQ0LZW"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);