import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCD5pzq-g9AmZ9A5ysVXY8BVCkmevHD_aU",
  authDomain: "slack-clone-5bfce.firebaseapp.com",
  databaseURL: "https://slack-clone-5bfce.firebaseio.com",
  projectId: "slack-clone-5bfce",
  storageBucket: "slack-clone-5bfce.appspot.com",
  messagingSenderId: "675493055107",
  appId: "1:675493055107:web:30cb63d68b86927635e9b6",
  measurementId: "G-2ZY74Z9LEP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
