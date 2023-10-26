// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArYlK3yEdPNuyZFQPDIOWhRUIEALOVJPM",
  authDomain: "car-doctor01.firebaseapp.com",
  projectId: "car-doctor01",
  storageBucket: "car-doctor01.appspot.com",
  messagingSenderId: "821613601750",
  appId: "1:821613601750:web:6820d508e6c4eabd913a77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth