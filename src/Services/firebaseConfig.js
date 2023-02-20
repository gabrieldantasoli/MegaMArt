import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



// Web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDYTWys6jvQHADXDQlVDZhFFRUmg3rCJ8c",
  authDomain: "megamart-1fe70.firebaseapp.com",
  databaseURL: "https://megamart-1fe70-default-rtdb.firebaseio.com",
  projectId: "megamart-1fe70",
  storageBucket: "megamart-1fe70.appspot.com",
  messagingSenderId: "564614811148",
  appId: "1:564614811148:web:48eb361c5958446f536829"
};



// Initialize Firebase;
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;