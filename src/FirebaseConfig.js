import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCh5RSfVXRMq3-jRUK5WO9b-1z7HYDdyYI",
  authDomain: "talnio.firebaseapp.com",
  projectId: "talnio",
  storageBucket: "talnio.appspot.com",
  messagingSenderId: "722711054480",
  appId: "1:722711054480:web:e7587364964274883cb015",
  measurementId: "G-QJ79T7KLVX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;