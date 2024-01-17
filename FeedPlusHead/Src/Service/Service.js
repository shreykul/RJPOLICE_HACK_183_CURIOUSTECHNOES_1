import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from "@react-native-community/async-storage";
import { getFirestore } from "firebase/firestore";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyBMMvdFI4TAYBRlyNjUG8PtHTOwfPejdEQ",
  authDomain: "vernal-day-409616.firebaseapp.com",
  databaseURL: "https://vernal-day-409616-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vernal-day-409616",
  storageBucket: "vernal-day-409616.appspot.com",
  messagingSenderId: "831257079947",
  appId: "1:831257079947:web:7dc93c460235b484a5e48e",
  measurementId: "G-P4PD7HV8G2"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);
export { auth,db};
