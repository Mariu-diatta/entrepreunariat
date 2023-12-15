// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiy36DLxHvDuTjkKsQDz-nCoklQa16i2w",
  authDomain: "dorwar-a3c90.firebaseapp.com",
  projectId: "dorwar-a3c90",
  storageBucket: "dorwar-a3c90.appspot.com",
  messagingSenderId: "32361180539",
  appId: "1:32361180539:web:e67fb488c2ed64376e21de",
  measurementId: "G-KF9KYN58NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
