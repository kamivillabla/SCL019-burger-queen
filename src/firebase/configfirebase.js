// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjRwLb_W-hxD1J66yec6e3KverKmKBRLE",
  authDomain: "burgerqueen-48bd2.firebaseapp.com",
  projectId: "burgerqueen-48bd2",
  storageBucket: "burgerqueen-48bd2.appspot.com",
  messagingSenderId: "698603404240",
  appId: "1:698603404240:web:d792997d2ecfe14bdd97d5",
  measurementId: "G-XPZ2R2KCE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
