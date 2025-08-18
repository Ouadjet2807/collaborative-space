import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAIk9_-ET5se7Jc4zJ8qAD_bjb10vtkjjc",
  authDomain: "dashboard-a239b.firebaseapp.com",
  projectId: "dashboard-a239b",
  storageBucket: "dashboard-a239b.firebasestorage.app",
  messagingSenderId: "167657685382",
  appId: "1:167657685382:web:31b41b86ff7350e74fac07"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);