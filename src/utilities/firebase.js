import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBcM4TDEnxQ9lgwKcxWekdbEd5yIHsXiCo",
    authDomain: "vue-new-course-demo.firebaseapp.com",
    projectId: "vue-new-course-demo",
    storageBucket: "vue-new-course-demo.appspot.com",
    messagingSenderId: "894571368933",
    appId: "1:894571368933:web:066898faf97d1200cadf0c"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref('chats');
export default firebase;