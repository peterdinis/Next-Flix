import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8aEvm1nWqSLriqzDhCvTj4JL2eukbCb0",
  authDomain: "netflix-clone-6cc93.firebaseapp.com",
  projectId: "netflix-clone-6cc93",
  storageBucket: "netflix-clone-6cc93.appspot.com",
  messagingSenderId: "456198261047",
  appId: "1:456198261047:web:473cf4c322b605025e32b2",
  measurementId: "G-ETS4JECC5T",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
