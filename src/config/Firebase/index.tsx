// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDhXzSF9LLUqLqbbxXTvoDPpocDjHUdZYs',
  authDomain: 'moneytracker2024-1255d.firebaseapp.com',
  projectId: 'moneytracker2024-1255d',
  storageBucket: 'moneytracker2024-1255d.appspot.com',
  messagingSenderId: '465599963015',
  appId: '1:465599963015:web:5840b3200f92a5b1923d22',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
