import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDCdYES3QFpKHZxYcjvZ8tNxuRS5PywGVI",
    authDomain: "clone-c1fde.firebaseapp.com",
    databaseURL: "https://clone-c1fde.firebaseio.com",
    projectId: "clone-c1fde",
    storageBucket: "clone-c1fde.appspot.com",
    messagingSenderId: "819317931610",
    appId: "1:819317931610:web:26213c5af5bddbb6926263",
    measurementId: "G-E8BJJ2LLFV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};