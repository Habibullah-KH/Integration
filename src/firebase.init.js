// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe3MKj8oruMa4tCQRUUR4pRwLb19CN1kY",
  authDomain: "integration-e16c6.firebaseapp.com",
  projectId: "integration-e16c6",
  storageBucket: "integration-e16c6.firebasestorage.app",
  messagingSenderId: "575830756311",
  appId: "1:575830756311:web:eaf6185ce5eb2b7bb1d992"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);