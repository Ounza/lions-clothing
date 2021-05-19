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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.id}`);
    const snapshot = await userRef.get
    //Create new user
    if(!snapshot.exists){
        const{displayName, email} = userAuth;
        const createdAt = new Date();
        try {
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           }) 
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef; //if we need it
    //query inside firestore for the document to see if it exists
    //console.log(snapshot);

}

//Initialize Firebase
firebase.initializeApp(config);



//Configure authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;