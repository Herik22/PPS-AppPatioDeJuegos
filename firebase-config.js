import firebase from "firebase/compat/app";
import "firebase/compat/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBlW8QOArAzdD0gDJ8owzVDPnhWytHe5JA",
  authDomain: "proyectosaladejuegos.firebaseapp.com",
  projectId: "proyectosaladejuegos",
  storageBucket: "proyectosaladejuegos.appspot.com",
  messagingSenderId: "368301060849",
  appId: "1:368301060849:web:b0495f496d249d7fbbef50",
});

const authentication = firebase.auth();

export { authentication, firebase };
