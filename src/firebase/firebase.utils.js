import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyAfv0UfYhpLXbh6FEXrdMD73kH_6RiX8Hc",
    authDomain: "crwn-clothing-611a3.firebaseapp.com",
    databaseURL: "https://crwn-clothing-611a3.firebaseio.com",
    projectId: "crwn-clothing-611a3",
    storageBucket: "crwn-clothing-611a3.appspot.com",
    messagingSenderId: "579317452172",
    appId: "1:579317452172:web:cb9d71ed187c7329555aa9"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
