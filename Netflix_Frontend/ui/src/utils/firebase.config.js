// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG3Q_pIKlZJPlhxIAlEpTMF2KMe9MSeac",
  authDomain: "netflix-clone-5308d.firebaseapp.com",
  projectId: "netflix-clone-5308d",
  storageBucket: "netflix-clone-5308d.appspot.com",
  messagingSenderId: "582443307377",
  appId: "1:582443307377:web:58b220dee7db16d6f066d0",
  measurementId: "G-53FMPZ3Z20",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const Authentication = getAuth(app);
