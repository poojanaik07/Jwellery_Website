

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB85LQyMMMxE5phxPUx1vpM4gt5ZB7vVas",
  authDomain: "jwellerywebsite-19a6c.firebaseapp.com",
  projectId: "jwellerywebsite-19a6c",
  storageBucket: "jwellerywebsite-19a6c.firebasestorage.app",
  messagingSenderId: "644842934352",
  appId: "1:644842934352:web:739972cd2e386bac660155",
  measurementId: "G-9PHB60N1GS"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;
