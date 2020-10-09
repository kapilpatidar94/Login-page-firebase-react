import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCLY5bOMazPRpvuyrXLkscOR8sf-Mya1_Q",
    authDomain: "login-page-edf52.firebaseapp.com",
    databaseURL: "https://login-page-edf52.firebaseio.com",
    projectId: "login-page-edf52",
    storageBucket: "login-page-edf52.appspot.com",
    messagingSenderId: "316909571459",
    appId: "1:316909571459:web:f71effc1368c1629e7fab6",
    measurementId: "G-C9KRSKQDZR"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
// console.log("kapil patidar"+fire.auth().signOut());
//   firebase.analytics();
export default fire;