import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMDhoi3_fBOMfvGWaGJObeDP8TG3IOakc",
    authDomain: "instagram-clone-4c054.firebaseapp.com",
    projectId: "instagram-clone-4c054",
    storageBucket: "instagram-clone-4c054.appspot.com",
    messagingSenderId: "980640610027",
    appId: "1:980640610027:web:f56278784dfe615d4470ae"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};