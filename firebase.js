import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyARuo9xOd7mH1gZdk9E7W1loeRS6QFCbwo",
  authDomain: "degroof-4dcc9.firebaseapp.com",
  databaseURL: "https://degroof-4dcc9.firebaseio.com",
  projectId: "degroof-4dcc9",
  storageBucket: "degroof-4dcc9.appspot.com",
  messagingSenderId: "761204062565"
};

firebase.initializeApp(config);

export default firebase;
