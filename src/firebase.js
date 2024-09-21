import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyB7ltt79cYeyZBHm2Zin8tSePjz1Mp4aBE",
  authDomain: "photography-website-83b32.firebaseapp.com",
  projectId: "photography-website-83b32",
  storageBucket: "photography-website-83b32.appspot.com",
  messagingSenderId: "50694672442",
  appId: "1:50694672442:web:57fffff6405f37b08aa503"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase authentication instance
const auth = getAuth(app);

// Export auth
export { auth };
