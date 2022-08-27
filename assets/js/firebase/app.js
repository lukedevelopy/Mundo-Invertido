
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCdN-aPzpYLFTKAiidXFcCVlHAu5jaNGrY",
    authDomain: "projeto-mundo-invertido-5baf2.firebaseapp.com",
    projectId: "projeto-mundo-invertido-5baf2",
    storageBucket: "projeto-mundo-invertido-5baf2.appspot.com",
    messagingSenderId: "78318294034",
    appId: "1:78318294034:web:2be04cffebbd999691f4cb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app