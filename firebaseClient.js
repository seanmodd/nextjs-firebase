// const firebase = require('firebase');
import firebase from 'firebase';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCtqG6UY4lB3PaF2iQ6nGMjxpcsEjWZ0W8',
  authDomain: 'nextjs-events-seanmodd.firebaseapp.com',
  databaseURL: 'https://nextjs-events-seanmodd-default-rtdb.firebaseio.com',
  projectId: 'nextjs-events-seanmodd',
  storageBucket: 'nextjs-events-seanmodd.appspot.com',
  messagingSenderId: '319556693749',
  appId: '1:319556693749:web:e89a2e123b88793e061fbc',
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  // return firebase;
}
