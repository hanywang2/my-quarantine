const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3XZHQ1dpI2Luug1RoprsUpf6pNc8et8A",
    authDomain: "quarantiner-25956.firebaseapp.com",
    databaseURL: "https://quarantiner-25956.firebaseio.com",
    projectId: "quarantiner-25956",
    storageBucket: "quarantiner-25956.appspot.com",
    messagingSenderId: "497625010193",
    appId: "1:497625010193:web:1270856c47682ea44d21b0",
    measurementId: "G-SE34RBG991"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };