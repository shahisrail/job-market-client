// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyA2ZFm6ouLOXEhZwGYWGAxs4OQVcgVj6do",
  // authDomain: "assaignment-11-63ae5.firebaseapp.com",
  // projectId: "assaignment-11-63ae5",
  // storageBucket: "assaignment-11-63ae5.appspot.com",
  // messagingSenderId: "194362693725",
  // appId: "1:194362693725:web:2b7ba14a7e3c01110655b4"
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app)