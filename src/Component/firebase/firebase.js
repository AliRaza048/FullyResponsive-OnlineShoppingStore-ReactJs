// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOhapuUxzsd_fxsq0FRXa6fx4GrS5EQx4",
  authDomain: "authentication-f6af2.firebaseapp.com",
  projectId: "authentication-f6af2",
  storageBucket: "authentication-f6af2.appspot.com",
  messagingSenderId: "155737462276",
  appId: "1:155737462276:web:4dbd8ff03331891a314751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };