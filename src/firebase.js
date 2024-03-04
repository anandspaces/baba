// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import { getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyByxyzkKaIszhfviADF0s-fkqwzOEX-eGE",
    authDomain: "social-react-8a2d2.firebaseapp.com",
    projectId: "social-react-8a2d2",
    storageBucket: "social-react-8a2d2.appspot.com",
    messagingSenderId: "808244839204",
    appId: "1:808244839204:web:36d5cf2046d4d23c14a9b1",
    measurementId: "G-S5F7FDWQNP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export {db};