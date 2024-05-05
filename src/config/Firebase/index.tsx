// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDbS4lv1n7o4h6hvObeAcpT__LISfSrYSc',
  authDomain: 'moneytrackermad2024.firebaseapp.com',
  projectId: 'moneytrackermad2024',
  storageBucket: 'moneytrackermad2024.appspot.com',
  messagingSenderId: '741449763278',
  appId: '1:741449763278:web:7c6131a5afb97d6802439f',
  databaseURL: 'https://moneytrackermad2024-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
