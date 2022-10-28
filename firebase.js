import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyCW4qDe7di0UqUC6B7-U5X2D0-rDi9hkX4",
    authDomain: "otp-verification-fb094.firebaseapp.com",
    projectId: "otp-verification-fb094",
    storageBucket: "otp-verification-fb094.appspot.com",
    messagingSenderId: "468837149147",
    appId: "1:468837149147:web:50b452f80634c3f9ae9ffe",
    measurementId: "G-9JRH9EEMCQ"
  };

  if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig);
  }

