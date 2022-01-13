import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBHOQgibaR0gc3InxQd82QpZfZ7IQzR_L4",
    authDomain: "react-firebase-projects-f1f49.firebaseapp.com",
    projectId: "react-firebase-projects-f1f49",
    storageBucket: "react-firebase-projects-f1f49.appspot.com",
    messagingSenderId: "423573952369",
    appId: "1:423573952369:web:d931280028870a6fdd08d0"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  function login() {
    return auth.signInWithPopup(provider);
  }

  function logout() {
    return auth.signOut();
  }

  export { auth, login, logout };