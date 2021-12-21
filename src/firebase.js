import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFUxOloo1jcIWqZo4vfInyPODuHEZxWKM",
    authDomain: "chatapp-7fd9a.firebaseapp.com",
    databaseURL:"https://chatapp-7fd9a.web.app",
    projectId: "chatapp-7fd9a",
    storageBucket: "chatapp-7fd9a.appspot.com",
    messagingSenderId: "70576814714",
    appId: "1:70576814714:web:eb29f5e615b5eacab099c3",
    measurementId: "G-M8LRR26C6M"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;