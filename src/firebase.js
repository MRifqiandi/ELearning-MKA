import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZhc63cZuht9i6lXhwCnWVMvzsj-h5nyU",
  authDomain: "elearning-mka.firebaseapp.com",
  projectId: "elearning-mka",
  storageBucket: "elearning-mka.appspot.com",
  messagingSenderId: "910674577429",
  appId: "1:910674577429:web:f1ba6b7f6b992fc4f1a61c",
  measurementId: "G-4YBMR13ESP",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Ekspor auth untuk digunakan di file lain
export const auth = getAuth(app);
