import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_ID,
  appId: import.meta.env.VITE_FIREBASE_ID_APP,
  measurementId: import.meta.env.VITE_FIREBASE_MEASURE_ID,
};

// Inicializacion de aplicativo de firebase de la base de datos autenticacion y almacenamiento
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app)
 const auth = getAuth(app)
 const storage = getStorage(app)

export {app,db,auth,storage}
