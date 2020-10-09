'use strict'
console.log("Here is the loggin magic");
let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate