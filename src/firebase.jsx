// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVRu73AY3aAIRxW9PSjFfLOO1KL0CGfPQ",
  authDomain: "project-4053803933251995461.firebaseapp.com",
  projectId: "project-4053803933251995461",
  storageBucket: "project-4053803933251995461.appspot.com",
  messagingSenderId: "841288400820",
  appId: "1:841288400820:web:ace0f8caf6c7c8a02e7ce1",
  measurementId: "G-H548K2DHZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
