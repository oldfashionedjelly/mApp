import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// use env variables for security

require('dotenv').config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "mapp-8c0f4.firebaseapp.com",
  projectId: "mapp-8c0f4",
  storageBucket: "mapp-8c0f4.appspot.com",
  messagingSenderId: "442360603702",
  appId: "1:442360603702:web:5e370950b2eda24d536497"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);