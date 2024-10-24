// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyBPnYhV6IdEHhkSiiPbPnZTTYcbS0T-lic",
//   authDomain: "jira-b4785.firebaseapp.com",
//   projectId: "jira-b4785",
//   storageBucket: "jira-b4785.appspot.com",
//   messagingSenderId: "769883137200",
//   appId: "1:769883137200:web:9fdc4bbba19e842e90c775",
//   measurementId: "G-8V0Y234JY3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const auth = getAuth(app);
const db =  getFirestore(app)

export {
  db,
  auth
}


