import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyATvYbJFveuW8ElTogDZYXu0EUiiY7mZTM",
    authDomain: "lion-clothing-shop.firebaseapp.com",
    projectId: "lion-clothing-shop",
    storageBucket: "lion-clothing-shop.appspot.com",
    messagingSenderId: "543644739350",
    appId: "1:543644739350:web:bdf0fc0b03e6fe31959237",
    measurementId: "G-6MDQ795NN3"
};

//Initialize Firebase
firebase.initializeApp(config);


//Configure authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;