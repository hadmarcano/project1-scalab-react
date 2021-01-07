import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// config

const firebaseConfig = {
  apiKey: "AIzaSyAlVR8SrdzTblKhLttkoeEKeNOJjObiKCE",
  authDomain: "project-1-reactjs.firebaseapp.com",
  projectId: "project-1-reactjs",
  storageBucket: "project-1-reactjs.appspot.com",
  messagingSenderId: "5337790239",
  appId: "1:5337790239:web:84c49939756e0a24fa622a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
