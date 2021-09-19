 import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDylmAqbrFM76UdqzZafN3jyJmbGfopDl4",
  authDomain: "attendance-app-72e2d.firebaseapp.com",
  projectId: "attendance-app-72e2d",
  storageBucket: "attendance-app-72e2d.appspot.com",
  messagingSenderId: "694908920671",
  appId: "1:694908920671:web:cd2eb8dc41b0d62e6f8cea"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  