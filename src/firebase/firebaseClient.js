import firebase from 'firebase/app'

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyB3Ti8JVa72xsGTpGbSMmjoT0E8Kdd9kuw',
  authDomain: 'form-builder-98371.firebaseapp.com',
  projectId: 'form-builder-98371',
  storageBucket: 'form-builder-98371.appspot.com',
  messagingSenderId: '635495346545',
  appId: '1:635495346545:web:3a679b8144d7b5d60f06d0'
}

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG)
  }
}
