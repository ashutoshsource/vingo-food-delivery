// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrHfpygPEqVIf2xQjq54scB7I6tyFs5x0",
  authDomain: "vingo-ashutosh.firebaseapp.com",
  projectId: "vingo-ashutosh",
  storageBucket: "vingo-ashutosh.firebasestorage.app",
  messagingSenderId: "499861229901",
  appId: "1:499861229901:web:051f796bc9234f1ff96704"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}