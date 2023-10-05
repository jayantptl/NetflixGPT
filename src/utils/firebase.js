// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCELJzjXsI-eeI8azK15-g-JLkJfH6uHLU",
  authDomain: "netflixgpt-2cca3.firebaseapp.com",
  projectId: "netflixgpt-2cca3",
  storageBucket: "netflixgpt-2cca3.appspot.com",
  messagingSenderId: "29836699394",
  appId: "1:29836699394:web:26697f0857cea67f03041b",
  measurementId: "G-2RYYMCWEWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();