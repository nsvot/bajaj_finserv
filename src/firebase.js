import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDL7OVZ1B8SaBbEo8azgEZAE9yC5oSK17I",
    authDomain: "bajaj-finserv-nsvot.firebaseapp.com",
    projectId: "bajaj-finserv-nsvot",
    storageBucket: "bajaj-finserv-nsvot.appspot.com",
    messagingSenderId: "830942512775",
    appId: "1:830942512775:web:3de99aaf63767d0acf9a22"
  };

const app = initializeApp(firebaseConfig);
// Initialize Firebase

export const initFirebase = () => {
  return app;
};
