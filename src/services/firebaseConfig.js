import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";
import "@firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAe0C8PRVm51cFdig3yCauf8kqHGXPZOzg",
  authDomain: "cookito-15ce2.firebaseapp.com",
  projectId: "cookito-15ce2",
  storageBucket: "cookito-15ce2.appspot.com",
  messagingSenderId: "66584450964",
  appId: "1:66584450964:web:82031a7d6354766ec16181",
  measurementId: "G-5S3FPC4FZF",
};
// if user has already opened app atleasonce connect with FIREBASE
if (firebase.apps.length > 0 === false) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
