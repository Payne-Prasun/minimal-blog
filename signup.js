import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLXczeErI6xod4yv7ISCLggkgKEf8K69I",
    authDomain: "blog-database-bf3a1.firebaseapp.com",
    databaseURL: "https://blog-database-bf3a1-default-rtdb.firebaseio.com",
    projectId: "blog-database-bf3a1",
    storageBucket: "blog-database-bf3a1.appspot.com",
    messagingSenderId: "445008082576",
    appId: "1:445008082576:web:90549e6702e81bd50bca15",
    measurementId: "G-9GQNWRHMN2"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
  
button_ids.addEventListener('click',(e) => {
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;
    var password_confirm = document.getElementById('Password_Confirm').value;
    var username = document.getElementById('Username_input').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
          
        set(ref(database, 'users/' + user.uid), {
            username: username,
            email: email
        })

            // alert('Account Created');
            
            //to redirect to another page add code here

            
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
            //..
            // alert(errorMessage);
    });

})


// function userpop(){
//     const openPopupButton = document.getElementById('join');
//     const closePopupButton = document.getElementById('close');
//     const popup = document.getElementById('popup');
//     const popupBackground = document.querySelector('.popup_background');

//     openPopupButton.addEventListener('click', () => {
//         popup.style.display = 'block';
//         popupBackground.style.display = 'block';
//     });

//     closePopupButton.addEventListener('click', () => {
//         popup.style.display = 'none';
//         popupBackground.style.display = 'none';
//     });
// }

function checkEquality() {
    // Get the values from the input text boxes
    var input1Value = document.getElementById("Password").value;
    var input2Value = document.getElementById("Password_Confirm").value;

    // Check if the values are the same
    if (input1Value === input2Value) {
        // alert("Inputs are the same");
        // console.log("HEHE");
        const openPopupButton = document.getElementById('join');
        const closePopupButton = document.getElementById('close');
        const popup = document.getElementById('popup');
        const popupBackground = document.querySelector('.popup_background');

        openPopupButton.addEventListener('click', () => {
            popup.style.display = 'block';
            popupBackground.style.display = 'block';
        });

        closePopupButton.addEventListener('click', () => {
            popup.style.display = 'none';
            popupBackground.style.display = 'none';
        });
        
    } else {
        alert("Inputs are different");
        console.log("bye");

    }
}

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("join");

    // Add an event listener to the button
    button.addEventListener("click", checkEquality);
});

