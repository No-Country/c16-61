import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig:any = process.env.FIREBASE_API_KEY;

const app = initializeApp(firebaseConfig);
const firebaseApp = getFirestore(app)

export { firebaseApp }