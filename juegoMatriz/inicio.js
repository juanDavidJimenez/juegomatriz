
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALmL57Zz934toCxOJ2z3ncsOHJ2hVzZUk",
  authDomain: "matrixgame-dc68f.firebaseapp.com",
  projectId: "matrixgame-dc68f",
  storageBucket: "matrixgame-dc68f.appspot.com",
  messagingSenderId: "939471430347",
  appId: "1:939471430347:web:03ba06ca7417f07dc8314e",
  measurementId: "G-778Y9BRL0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



let nombreUsuario="";

function darBienvenida(){

    nombreUsuario = document.getElementById("nombreInput").value;
    if(nombreUsuario.length > 0){
        //alert( "Bienvenido " + nombreUsuario);
        sessionStorage.setItem('nombreUsuario', nombreUsuario);
        window.location.href = "test.html";
        //location.href = "test.html"
    }else{
        alert( "Debe de ingresar un nombre por favor");
    }
    //document.write("This is written from JavaScript"); este comando sobreescribe todo el archivo html
}
