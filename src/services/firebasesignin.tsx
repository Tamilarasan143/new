// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQTruUet17yxcAW4XJ6RrkaXiXUPdUObY",
  authDomain: "mithra-ddebd.firebaseapp.com",
  projectId: "mithra-ddebd",
  storageBucket: "mithra-ddebd.appspot.com",
  messagingSenderId: "597080116261",
  appId: "1:597080116261:web:e65e2c1c00e2e85a0f43cc",
  measurementId: "G-BPK2SXKY0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app ;