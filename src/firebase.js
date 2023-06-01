// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZU3vY4jE4w1jZw4MmERT2styneahJVsU",
  authDomain: "shop-green-a3ae3.firebaseapp.com",
  projectId: "shop-green-a3ae3",
  storageBucket: "shop-green-a3ae3.appspot.com",
  messagingSenderId: "714877199071",
  appId: "1:714877199071:web:980b9b82017b86e5513f6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);