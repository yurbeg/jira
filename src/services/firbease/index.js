// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASrAS1Q7OVnciBtPUcFYznG2XapJme9lY",
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
const auth = getAuth(app)

export {
    auth
}