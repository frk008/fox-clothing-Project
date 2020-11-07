import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwaw9YARUsL6mPrVwojMetTAKlScFqaPw",
    authDomain: "foxclothing-db.firebaseapp.com",
    databaseURL: "https://foxclothing-db.firebaseio.com",
    projectId: "foxclothing-db",
    storageBucket: "foxclothing-db.appspot.com",
    messagingSenderId: "99431815652",
    appId: "1:99431815652:web:a572ff4f8c4ad1bd1ccff1",
    measurementId: "G-WGDDMYRRMR"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;