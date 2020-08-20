import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAhnMUHoYNxG4EbtUhql1C4AnAKuqG2LQg",
  authDomain: "crwn-db-28028.firebaseapp.com",
  databaseURL: "https://crwn-db-28028.firebaseio.com",
  projectId: "crwn-db-28028",
  storageBucket: "crwn-db-28028.appspot.com",
  messagingSenderId: "821693714643",
  appId: "1:821693714643:web:b7837d0780e9636483c426",
  measurementId: "G-3TGQL7LVLN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
