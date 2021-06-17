import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyABxGk2yyUxolMg3lxJwrTlhn_VYeEjo8Q",
    authDomain: "juquery.firebaseapp.com",
    projectId: "juquery",
    storageBucket: "juquery.appspot.com",
    messagingSenderId: "530172403335",
    appId: "1:530172403335:web:94fdee0ba49f8f01bce222",
    measurementId: "G-B4V59CC70Q"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const auth=firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider();
const db=firebaseApp.firestore();
export {auth,provider};
export default db;