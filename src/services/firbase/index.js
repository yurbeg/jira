import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "jira-3e41b.firebaseapp.com",
  databaseURL: "https://jira-3e41b-default-rtdb.firebaseio.com",
  projectId: "jira-3e41b",
  storageBucket: "jira-3e41b.appspot.com",
  messagingSenderId: "761522765865",
  appId: "1:761522765865:web:0f8da5183fcd29f429dc38",
  measurementId: "G-5B4VBPSW83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export {
  db,
  auth,
  storage
}


