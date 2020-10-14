
  var firebaseConfig = {
    apiKey: "AIzaSyBwVV0Dx6mCl8OJHNnU2SOzjVqR8G1fAOY",
    authDomain: "loginpwa-70c31.firebaseapp.com",
    databaseURL: "https://loginpwa-70c31.firebaseio.com",
    projectId: "loginpwa-70c31",
    storageBucket: "loginpwa-70c31.appspot.com",
    messagingSenderId: "350726861158",
    appId: "1:350726861158:web:c5472fdbf310e6a1ab18a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
const auth = firebase.auth();

function gSignIn(){
  var provider = new firebase.auth.GoogleAuthProvider();
  singInWithProvider(provider);
}

function signOut(){
  auth.signOut().then(function(){
  // Sign the user out of the system.
  }).catch(function(error){
    //show the error
  })
}

function fSignIn(){
  var provider = new firebase.auth.FacebookAuthProvider();
  singInWithProvider(provider)
}

function singInWithProvider(provider){
  auth.signInWithPopup(provider).then(function(result){
    var token = result.credential.accessToken;
    var user = result.user;
  }).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorMessage)
    alert(errorMessage)
  });
}