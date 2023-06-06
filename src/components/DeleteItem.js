import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export default function deleteItem(id) {
    const docRef = doc(db, 'items', id)
     deleteDoc(docRef).then( () => console.log ('Document deleted')).catch(error => console.log(error.message))
 }