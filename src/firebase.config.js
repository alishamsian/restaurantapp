import { initializeApp , getApp , getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBckJ2a1Yo80G7MlO6wXZXO3rhjxO3bTx8",
  authDomain: "proven-cosmos-298805.firebaseapp.com",
  databaseURL: "https://proven-cosmos-298805-default-rtdb.firebaseio.com",
  projectId: "proven-cosmos-298805",
  storageBucket: "proven-cosmos-298805.appspot.com",
  messagingSenderId: "906684052830",
  appId: "1:906684052830:web:5bc490c23117270deacbcf",
  measurementId: "G-2H29PR6V0Z",
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app , firestore, storage}