const year = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span class="highlight">Last Modification: ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span>`;


function toggleButton() {
	var x = document.querySelector(".dropdown-content");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}


function checkLoginStatus() {
	let user = localStorage.getItem('user');
	if (user) {
		document.getElementById('login-form').style.display = 'none';
		document.getElementById('register-form').style.display = 'none';
		document.getElementById('logout-section').style.display = 'block';
	} else {
		document.getElementById('login-form').style.display = 'block';
		document.getElementById('register-form').style.display = 'none';
		document.getElementById('logout-section').style.display = 'none';
	}
}

function register(event) {
event.preventDefault();

document.getElementById('register-username-error').innerText = '';
document.getElementById('register-email-error').innerText = '';
document.getElementById('register-password-error').innerText = '';
document.getElementById('register-confirm-password-error').innerText = '';

var username = document.getElementById('register-username').value;
var email = document.getElementById('register-email').value;
var password = document.getElementById('register-password').value;
var confirmPassword = document.getElementById('register-confirm-password').value;

var valid = true;

// Username validation
if (username.trim() === '') {
	document.getElementById('register-username-error').innerText = 'Username is required.';
	valid = false;
}

// Email validation
if (email.trim() === '' || !validateEmail(email)) {
	document.getElementById('register-email-error').innerText = 'Please enter a valid email.';
	valid = false;
}

// Password validation
if (password.trim() === '') {
	document.getElementById('register-password-error').innerText = 'Password is required.';
	valid = false;
}

// Confirm password validation
if (confirmPassword.trim() !== password) {
	document.getElementById('register-confirm-password-error').innerText = 'Passwords do not match.';
	valid = false;
}

if (valid) {
	localStorage.setItem('user', username);  // Save user data in localStorage
	alert('Registration successful!');
	checkLoginStatus();  // Update the UI
}

return valid;
}

// Email format validation function
function validateEmail(email) {
var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
return re.test(email);
}