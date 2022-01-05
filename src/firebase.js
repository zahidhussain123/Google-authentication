import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA89lmNig-GTT3ela0SZNhU5BDhsBphkWk",
  authDomain: "auth-6adac.firebaseapp.com",
  projectId: "auth-6adac",
  storageBucket: "auth-6adac.appspot.com",
  messagingSenderId: "415648531721",
  appId: "1:415648531721:web:0bc5d8b30024d7fc267fd8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
