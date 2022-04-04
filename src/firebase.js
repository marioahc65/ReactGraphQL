import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB5yAczkCgwZTp6jnOZrr41yM0pdqb3sSw",
    authDomain: "react-redux-graphql-4a254.firebaseapp.com",
    projectId: "react-redux-graphql-4a254",
    storageBucket: "react-redux-graphql-4a254.appspot.com",
    messagingSenderId: "54503205728",
    appId: "1:54503205728:web:cc762527ebf4cb6293cc05"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore().collection('favs');

export function getFavs(uid) {
 return  db.doc(uid).get()
  .then(snap => {
      return snap.data().array
  })
}

export function updateDB(array, uid){
    return db.doc(uid).set({ array })
}

export function signOutGoogle() {
  firebase.auth().signOut();
}

export function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(snap => snap.user)
}