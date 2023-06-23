import {initializeApp} from "firebase/app";

import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

// web app's Firebase configuration
const config = {
  apiKey: "AIzaSyD2KjttlczOEx--coe9s-E9JOzW6KhtsvU",
  authDomain: "e-cmrc-prjct.firebaseapp.com",
  projectId: "e-cmrc-prjct",
  storageBucket: "e-cmrc-prjct.appspot.com",
  messagingSenderId: "1019857206577",
  appId: "1:1019857206577:web:ac586f9df20280b6880410",
  measurementId: "G-SQY39CVLS1",
  async headers() { return [ { source: '/(.*)', headers: [ { key: 'Cross-Origin-Opener-Policy', value: 'same-origin', }, ], }, ]; },
};

// initializing firebase
const app = initializeApp(config);

export const auth = getAuth(app);
auth.languageCode = 'it';

// export const firestore = firestore();

const provider = new GoogleAuthProvider();
// provider.setCustormParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
