import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    /* copy and paste from console.firebase.com after creating a project there. */
  };
  

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

  export { app, db, storage };
