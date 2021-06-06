import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD4y4_iGyQZiP5T39mTENXZIVvFxoPmosY",
    authDomain: "whatsapp-2-d6b13.firebaseapp.com",
    projectId: "whatsapp-2-d6b13",
    storageBucket: "whatsapp-2-d6b13.appspot.com",
    messagingSenderId: "441854208538",
    appId: "1:441854208538:web:5f37a5a4e8e725c026bfa3"
}

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app()

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };