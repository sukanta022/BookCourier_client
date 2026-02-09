// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByNX5xAtVb7DY1ZNe_OXdOD3WC5Bl001E",
  authDomain: "bookcouriar.firebaseapp.com",
  projectId: "bookcouriar",
  storageBucket: "bookcouriar.firebasestorage.app",
  messagingSenderId: "656165277406",
  appId: "1:656165277406:web:f10e83d0fa41bd80123c4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);