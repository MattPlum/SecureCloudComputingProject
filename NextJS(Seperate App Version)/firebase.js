
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA5nZBkpAKtvjuWRX1QExgiQjO0VGgbfcA",
  authDomain: "gdocs-clone-e64ce.firebaseapp.com",
  projectId: "gdocs-clone-e64ce",
  storageBucket: "gdocs-clone-e64ce.appspot.com",
  messagingSenderId: "846189577544",
  appId: "1:846189577544:web:c4a556049acce5f5989f7d"
  };
  

//const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
//const storage = getStorage();

  export { db };
