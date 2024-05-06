// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCTTlAKq-KK0Aqp9aiQ9tPT_aGuJDovXRk',
  authDomain: 'demomoneytracker-a96fd.firebaseapp.com',
  projectId: 'demomoneytracker-a96fd',
  storageBucket: 'demomoneytracker-a96fd.appspot.com',
  messagingSenderId: '47579914537',
  appId: '1:47579914537:web:ceb38689863ea16551d738',
  databaseURL: 'https://demomoneytracker-a96fd-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
