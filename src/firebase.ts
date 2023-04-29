import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA71hM5n6OrH1uTWT_TWBJiugO0wibmY9o",
  authDomain: "react-firebase-project-3e66e.firebaseapp.com",
  projectId: "react-firebase-project-3e66e",
  storageBucket: "react-firebase-project-3e66e.appspot.com",
  messagingSenderId: "209900050532",
  appId: "1:209900050532:web:33a3092e817ca26878a771",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
