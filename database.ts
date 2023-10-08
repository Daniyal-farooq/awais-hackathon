
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCJdQRgyYf8LIQ9yXCkxsPYfBBbh5_n8S8",
  authDomain: "awais-3a07e.firebaseapp.com",
  projectId: "awais-3a07e",
  storageBucket: "awais-3a07e.appspot.com",
  messagingSenderId: "702712884680",
  appId: "1:702712884680:web:91c429ca1c48eb411424fd"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage= getStorage(app);



// Initialize Cloud Firestore and get a reference to the service

export {db,storage}