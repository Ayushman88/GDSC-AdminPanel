import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxfwzOPNUiaEC6MTZum9-AD8Rn3ZzmEEo",
  authDomain: "gdsc-auth-c944b.firebaseapp.com",
  projectId: "gdsc-auth-c944b",
  storageBucket: "gdsc-auth-c944b.appspot.com",
  messagingSenderId: "392468295644",
  appId: "1:392468295644:web:96a230bfadb1fcfddf2919",
  measurementId: "G-VTPHTCQ450",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };
