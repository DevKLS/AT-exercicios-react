import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnPPo-SRo_4Jt97JRy678Pyx4RlRRU5dA",
  authDomain: "exercicios-react.firebaseapp.com",
  projectId: "exercicios-react",
  storageBucket: "exercicios-react.firebasestorage.app",
  messagingSenderId: "788224406811",
  appId: "1:788224406811:web:2d9ebecdc57488d04ccfbe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);