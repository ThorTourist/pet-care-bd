// src/Firebase/firebase.init.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATXk39e8rvd6UIUn00LI64Dvvi53abggA",
  authDomain: "pet-care-bd-c2827.firebaseapp.com",
  projectId: "pet-care-bd-c2827",
  storageBucket: "pet-care-bd-c2827.firebasestorage.app",
  messagingSenderId: "286369264233",
  appId: "1:286369264233:web:86966a6e1c0b5b921728f8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
