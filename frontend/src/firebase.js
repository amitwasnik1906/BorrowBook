import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDQeLfOcgY1M-LPJj0JPQ9Vo6N_LYqWgw8",
  authDomain: "borrowbook-aw-19.firebaseapp.com",
  projectId: "borrowbook-aw-19",
  storageBucket: "borrowbook-aw-19.appspot.com",
  messagingSenderId: "815483284085",
  appId: "1:815483284085:web:d15784763a7a236e99e63c",
  measurementId: "G-N2C1LVXXTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth}

