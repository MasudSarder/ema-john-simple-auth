// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBt6JFKkEEPWpmrMZmDPTVWvIQN9gwDtA",
  authDomain: "ema-john-simple-43b4f.firebaseapp.com",
  projectId: "ema-john-simple-43b4f",
  storageBucket: "ema-john-simple-43b4f.appspot.com",
  messagingSenderId: "105800533013",
  appId: "1:105800533013:web:aa4bbdce4f4a210e557a1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;