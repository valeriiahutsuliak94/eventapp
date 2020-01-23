import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBuJmDS7O2ROmc2b0PqLbY56xoreNSA17g",
    authDomain: "events-732b4.firebaseapp.com",
    databaseURL: "https://events-732b4.firebaseio.com",
    projectId: "events-732b4",
    storageBucket: "events-732b4.appspot.com",
    messagingSenderId: "404933822787",
    appId: "1:404933822787:web:628a9e6e3caa3539cc47f6",
    measurementId: "G-GGL4YLSMYX"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;