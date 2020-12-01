import firebase from "firebase";

const { REACT_APP_API_KEY } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "react-todoist-2c311.firebaseapp.com",
  databaseURL: "https://react-todoist-2c311.firebaseio.com",
  projectId: "react-todoist-2c311",
  storageBucket: "react-todoist-2c311.appspot.com",
  messagingSenderId: "700884422272",
  appId: "1:700884422272:web:810796f9dd49e33934e065",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
