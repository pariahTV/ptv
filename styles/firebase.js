import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCVPVTPSz96AK2DOxxS7ahPUNx7PcNwk4o",
  authDomain: "ptv1-d75e9.firebaseapp.com",
  databaseURL: "https://ptv1-d75e9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ptv1-d75e9",
  storageBucket: "ptv1-d75e9.appspot.com",
  messagingSenderId: "787477365147",
  appId: "1:787477365147:web:12928bd7cd088415b8a13e"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
