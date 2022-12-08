// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeBJgywTwGxszyUX5qflbfQNeS3rnMKA4",
  authDomain: "volunteer-network-11792.firebaseapp.com",
  projectId: "volunteer-network-11792",
  storageBucket: "volunteer-network-11792.appspot.com",
  messagingSenderId: "343382959268",
  appId: "1:343382959268:web:dfd48653d75a5756663231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;