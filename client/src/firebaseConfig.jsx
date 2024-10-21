import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBkH9f3QolVfK19Iw1QQN6vKHGdJ8kg4sA",
  authDomain: "carrental-abcd.firebaseapp.com",
  projectId: "carrental-abcd",
  storageBucket: "carrental-abcd.appspot.com",
  messagingSenderId: "126385993548",
  appId: "1:126385993548:web:2075c6533f30eeb636c1e9",
  measurementId: "G-NE6B12JS1D",
  clientId:
    "126385993548-n2uof0ijrd0g5941c33fdhe0domm7f46.apps.googleusercontent.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
provider.setCustomParameters({
  prompt: "select_account ",
});

export { auth, provider, signInWithPopup };
