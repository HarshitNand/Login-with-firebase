
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2l6i1KFI1UuE-_ZqA0M_5GY7Od8S05KI",
  authDomain: "login-e29d6.firebaseapp.com",
  projectId: "login-e29d6",
  storageBucket: "login-e29d6.appspot.com",
  messagingSenderId: "266639931390",
  appId: "1:266639931390:web:9e07ddec9fae85a41cb2af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export {app,auth } ;