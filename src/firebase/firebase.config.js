import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgAT0-h7Q6-1tiwm6troCgYfBsTXk7ix8",
  authDomain: "quillarium-project.firebaseapp.com",
  projectId: "quillarium-project",
  storageBucket: "quillarium-project.appspot.com",
  messagingSenderId: "41470020617",
  appId: "1:41470020617:web:6a5e18d0b99b5829bb3cd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
