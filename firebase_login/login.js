// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAG8C3bga55MzWN0bk55wiPL206F2uds1o",
	authDomain: "signup-form-6dff6.firebaseapp.com",
	projectId: "signup-form-6dff6",
	storageBucket: "signup-form-6dff6.appspot.com",
	messagingSenderId: "108261720020",
	appId: "1:108261720020:web:20bbb11218b65297cce041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const auth1 = getAuth();

//   Getting all the Objects of SignUp Form
var name = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")

// making a function for storing data -- SignUp
window.signup = function (e) {
	e.preventDefault();
	var obj = {
		name: name.value,
		email: email.value,
		password: password.value,
	}
	createUserWithEmailAndPassword(auth, obj.email, obj.password)
		.then(function (success) {
			alert("SignUp Successful")
		})
		.catch(function (err) {
			alert("Error " + err)
		})
	console.log(obj);
	document.getElementById("signup").reset();
};

// Getting all the Objects of SignIn Form
var email1 = document.getElementById("email1")
var password1 = document.getElementById("password1")

// making a function for authenticating the existing users -- SignIn
window.signin = function (e) {
	e.preventDefault();
	var obj2 = {
		email1: email1.value,
		password1: password1.value,
	}
	signInWithEmailAndPassword(auth1, obj2.email1, obj2.password1)
		.then(function (success) {
			alert("Login Successful")
		})
		.catch(function (err) {
			alert("Login Error " + err)
		})
	console.log(obj2);
	document.getElementById("signin").reset();
};