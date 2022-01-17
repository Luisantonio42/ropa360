import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDUCbXzGWYeadxZTf3noCvzvigJ6pAsJKA",
  authDomain: "crwn-db-43a88.firebaseapp.com",
  projectId: "crwn-db-43a88",
  storageBucket: "crwn-db-43a88.appspot.com",
  messagingSenderId: "636076299829",
  appId: "1:636076299829:web:59f3745ba65461f5ec437c",
  measurementId: "G-PFNFXEYEBY"
};

export const createUserProfileDocument = async (userAuth,additionalData ) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;