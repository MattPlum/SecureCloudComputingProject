import firebase from 'firebase';

const firebaseConfig = {
    /* copy and paste from console.firebase.com after creating a project there. */
  };
  


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();


  export { db };
