import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWjCpPvIYJpYGk3ChMk7CEz9gAlvFt5Gg",
  authDomain: "clothing-webpage.firebaseapp.com",
  projectId: "clothing-webpage",
  storageBucket: "clothing-webpage.appspot.com",
  messagingSenderId: "883098848034",
  appId: "1:883098848034:web:0a77c24c41f8d01208b37b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
