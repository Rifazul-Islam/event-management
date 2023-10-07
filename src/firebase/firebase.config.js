// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8c_Dv0RmYaidBCPaeg5amEElc9J6UCQg",
  authDomain: "educational-and-training-b8524.firebaseapp.com",
  projectId: "educational-and-training-b8524",
  storageBucket: "educational-and-training-b8524.appspot.com",
  messagingSenderId: "394826151338",
  appId: "1:394826151338:web:0a1c19d4ee5ca1d2bf27d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;