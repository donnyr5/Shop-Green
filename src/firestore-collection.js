import { collection } from "firebase/firestore";
import { db } from "./firebase";

export const itemCollectionRef = collection(db, 'items');

export const userCollectionRef = collection(db, 'users');