// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKM5C-2YRaCXo8LPbzIs_8pnKcXgOk8p0",
  authDomain: "lunchbd-food.firebaseapp.com",
  projectId: "lunchbd-food",
  storageBucket: "lunchbd-food.appspot.com",
  messagingSenderId: "506319609833",
  appId: "1:506319609833:web:8617340161a0093433b578"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;