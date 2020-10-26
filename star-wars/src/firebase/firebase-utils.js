import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5YYcUoya05NpnoTDiITF4pD3bhdvyir0",
    authDomain: "star-wars-af982.firebaseapp.com",
    databaseURL: "https://star-wars-af982.firebaseio.com",
    projectId: "star-wars-af982",
    storageBucket: "star-wars-af982.appspot.com",
    messagingSenderId: "597668880189",
    appId: "1:597668880189:web:d7c276d69fcc4e2de72f54",
    measurementId: "G-XKX8268D3W"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const favorites = []
        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    favorites,
                    ...additionalData
                })
        } catch (error) {
            alert('error while creating user', error.message)
        }
    }
    return userRef
}


export const addToFireBaseFavorites = async (collectionKey, fieldToAdd) => {
    const docRef = firestore.collection(`users`).doc(collectionKey)
    return docRef.update({
        favorites: firebase.firestore.FieldValue.arrayUnion(fieldToAdd)
    });
}

export const removeFromFireBaseFavorites = async (collectionKey, fieldToRemove) => {
    const docRef = firestore.collection(`users`).doc(collectionKey)
    return docRef.update({
        favorites: firebase.firestore.FieldValue.arrayRemove(fieldToRemove)
    });
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;