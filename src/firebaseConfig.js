import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxREPO2z8Bmp58nKrjuTwRRluN2RxDakU",
  authDomain: "contactform-97357.firebaseapp.com",
  projectId: "contactform-97357",
  storageBucket: "contactform-97357.appspot.com",
  messagingSenderId: "453796098482",
  appId: "1:453796098482:web:00ad7acd138c0b65ddf4ab"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };