import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz3jL0qyVOQnO0A1sDJA0BJj4eNivHGU8",
  authDomain: "travelapp-8c7af.firebaseapp.com",
  projectId: "travelapp-8c7af",
  storageBucket: "travelapp-8c7af.appspot.com",
  messagingSenderId: "528556581150",
  appId: "1:528556581150:web:f82d6d5bd4b0ee264f290f",
  measurementId: "G-EE21RKLWCW",
};

if (firebase.apps.length > 0 === false) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
