'use strict'
(function(){
    const config = {
        apiKey: "AIzaSyBwVV0Dx6mCl8OJHNnU2SOzjVqR8G1fAOY",
        authDomain: "loginpwa-70c31.firebaseapp.com",
        databaseURL: "https://loginpwa-70c31.firebaseio.com",
        projectId: "loginpwa-70c31",
        storageBucket: "loginpwa-70c31.appspot.com",
        messagingSenderId: "350726861158",
        appId: "1:350726861158:web:c5472fdbf310e6a1ab18a7"
    };
    firebase.initializeApp(config)

})
console.log("Here is the loggin magic");
let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate