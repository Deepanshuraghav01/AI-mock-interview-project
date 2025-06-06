import {getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtoEB3eSTCVzXSa5JQ4vFgn2ptJ2Gz3Bo",
  authDomain: "ai-mock-interview-1584c.firebaseapp.com",
  projectId: "ai-mock-interview-1584c",
  storageBucket: "ai-mock-interview-1584c.firebasestorage.app",
  messagingSenderId: "349022032128",
  appId: "1:349022032128:web:657357abe1219a4b40a3e5"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};