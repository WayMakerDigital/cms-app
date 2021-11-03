import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDoWa17jJE3J6RkCFHXKIw3FSriTPNEunk",
  authDomain: "cms-app-1e5d6.firebaseapp.com",
  projectId: "cms-app-1e5d6",
  storageBucket: "cms-app-1e5d6.appspot.com",
  messagingSenderId: "163584459265",
  appId: "1:163584459265:web:c9634524427b325b2e7600",
  measurementId: "G-28DVVCM5TN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export  {
    storage, firebase as default
  }