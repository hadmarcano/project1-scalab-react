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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`); // define el path de la collection de identificador del usuario

  const snapshot = await userRef.get(); // .get()

  if (!snapshot.exist) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`error creating user: ${error.message}`);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore(); // firestore: todo lo que es apuntar a collections y documents

// config providers
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoolgle = () => auth.signInWithPopup(provider);

export default firebase;
