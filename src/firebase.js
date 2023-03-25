// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdNpob2H8bwPPB8Qt4mHD9BwO7wL0LFqI",
  authDomain: "char-1c59e.firebaseapp.com",
  projectId: "char-1c59e",
  storageBucket: "char-1c59e.appspot.com",
  messagingSenderId: "1027244307443",
  appId: "1:1027244307443:web:836bd570a1ab0815b85886"
};

export  const app = initializeApp(firebaseConfig);
export  const auth = getAuth();
export  const storage = getStorage();
export const db = getFirestore();