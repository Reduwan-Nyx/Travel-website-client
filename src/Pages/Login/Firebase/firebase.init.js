// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRR5Up0gqRTZZJLDdpeaXt8CTRKXjcSvg",
  authDomain: "justgo-website-a1f3f.firebaseapp.com",
  projectId: "justgo-website-a1f3f",
  storageBucket: "justgo-website-a1f3f.appspot.com",
  messagingSenderId: "207944159872",
  appId: "1:207944159872:web:f90405222e09672086cc65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth