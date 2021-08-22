import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyCOBrgNE14WbpZcdjCd3qjowsZzCqDBafk",
    authDomain: "fir-chat-e9226.firebaseapp.com",
    projectId: "fir-chat-e9226",
    storageBucket: "fir-chat-e9226.appspot.com",
    messagingSenderId: "743808375214",
    appId: "1:743808375214:web:9049d880320ca707a3903f",
    measurementId: "G-BB2FDQZ8T1"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();

