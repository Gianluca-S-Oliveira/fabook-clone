import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCz7Vqz0eUK6qHhQsD6bmbMkMbfMJJHQ8I",
  authDomain: "clone-fb-yt-77de8.firebaseapp.com",
  projectId: "clone-fb-yt-77de8",
  storageBucket: "clone-fb-yt-77de8.appspot.com",
  messagingSenderId: "44461658413",
  appId: "1:44461658413:web:6701042b59d68a8d4a83a4",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();
const auth = app.auth();

export { auth, db, storage };
