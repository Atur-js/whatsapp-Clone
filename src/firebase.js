import firebase from 'firebase';	

const firebaseConfig = {
  apiKey: "AIzaSyAhZWztNbT-uYPHwyU0qqyXUJj01nM4xmE",
  authDomain: "whatsapp-clone-3f6.firebaseapp.com",
  projectId: "whatsapp-clone-3f6",
  storageBucket: "whatsapp-clone-3f6.appspot.com",
  messagingSenderId: "813065232572",
  appId: "1:813065232572:web:97baf4a8cf04ce4557b0b9",
  measurementId: "G-SJJ8BXEYPK",
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  