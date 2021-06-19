import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBAXebgT1n6umTwlW0CuqOk6u_Yf5xHBMM",
    authDomain: "wily-595ba.firebaseapp.com",
    projectId: "wily-595ba",
    storageBucket: "wily-595ba.appspot.com",
    messagingSenderId: "365901684231",
    appId: "1:365901684231:web:7dc2fcdb23decd481e94a2"
  };

  if (!firebase.apps.length){
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore();