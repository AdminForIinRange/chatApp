// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmQMPonA36gZKdInVC8ae3ZzNAgleLF4c",
  authDomain: "chatapp-a616d.firebaseapp.com",
  projectId: "chatapp-a616d",
  storageBucket: "chatapp-a616d.appspot.com",
  messagingSenderId: "257285714222",
  appId: "1:257285714222:web:9bcd3adc06f94c51704abf",
  measurementId: "G-ZM1NNEZ4BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);