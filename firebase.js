import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAReZFEyLNARGJYdswfkN7ZSknRlnUDQE0",
  authDomain: "alifiarahmah-117ad.firebaseapp.com",
  projectId: "alifiarahmah-117ad",
  storageBucket: "alifiarahmah-117ad.appspot.com",
  messagingSenderId: "587255915001",
  appId: "1:587255915001:web:8a34c5919548e131265d28"
};

// init firebase app
initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore()

// reference to collection
const colRef = collection(db, 'messages')

// get collection data
var messages = []
getDocs(colRef)
	.then((snapshot) => {
		snapshot.docs.forEach((doc) => {
			messages.push({...doc.data(), id: doc.id })
		})
		console.log(messages)
	})
	.catch(err => {
		console.log(err.message)
	})