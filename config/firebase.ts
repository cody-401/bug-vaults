import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6e9GnT1CcReHlZHew-8BBC1jB3D2IEe8",
  authDomain: "bug-vaults-b0fe8.firebaseapp.com",
  projectId: "bug-vaults-b0fe8",
  storageBucket: "bug-vaults-b0fe8.firebasestorage.app",
  messagingSenderId: "338046788158",
  appId: "1:338046788158:web:b59c174e68b1167b0ae76f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);