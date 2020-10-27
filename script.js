var username = document.getElementById('username');
var user = document.querySelector('#user');
var password = document.querySelector('#password');
var userLabel = document.querySelector('#userLabel');
var passLabel = document.querySelector('label[for=password]');
var rememberMe = document.querySelector('input[type=checkbox]');
var submitBtn = document.querySelector('#submit');
var logoutBtn = document.getElementById('logout');

username.addEventListener('focus', function (e) {
	userLabel.classList.add('blue');
	username.classList.add('blue-border');
});

username.addEventListener('blur', function (e) {
	userLabel.classList.remove('blue');
	username.classList.remove('blue-border');
});

password.addEventListener('focus', function (e) {
	passLabel.classList.add('blue');
	password.classList.add('blue-border');
});

password.addEventListener('blur', function (e) {
	passLabel.classList.remove('blue');
	password.classList.remove('blue-border');
});

rememberMe.addEventListener('click', function (e) {
	if (rememberMe.checked) {
		alert('We will remember your username.');
	}
});

submitBtn.addEventListener('click', function (e) {
	// e.preventDefault(); //! We want this commented out/removed since we do actually want the form to submit.

	//? Harcourt added this code up top.
	if (rememberMe.checked) {
		localStorage.setItem('username', username.value);
	} else {
		localStorage.removeItem('username');
	}

	if (username.value === '' && password.value === '') {
		userLabel.classList.add('error');
		username.classList.add('label', 'error');
		passLabel.classList.add('error');
		password.classList.add('label', 'error');
	} else if (username.value === '') {
		userLabel.classList.add('error');
		username.classList.add('label', 'error');
		passLabel.classList.remove('error');
		password.classList.remove('label', 'error');
	} else if (password.value === '') {
		userLabel.classList.remove('error');
		username.classList.remove('label', 'error');
		passLabel.classList.add('error');
		password.classList.add('label', 'error');
	} else {
		// console.log('...test'); //? Commenting out for testing
		//? I think the instructions didn't explain this but this else block is only for when both username.value && password.value are NOT empty. We could potentially want to remember a username without even passing in a password value so I think the best place for this would be at the top of our submitBtn event listener
		// if (rememberMe.checked) {
		// 	localStorage.setItem('username', username.value);
		// // sessionStorage.setItem('user', username.value);
		//! We want to set user in session storage even if the box is unchecked. so we're going to want to put this outside of our if stmt. Right now this would only write the username in the navbar if the box was checked we want it to be written there whether the box is checked or not.
		// } else {
		// 	localStorage.removeItem('username');
		// }
		sessionStorage.setItem('user', username.value); //? Setting session storage on successful submission.
		userLabel.classList.remove('error');
		username.classList.remove('label', 'error');
		passLabel.classList.remove('error');
		password.classList.remove('label', 'error');
		// user.innerHTML = username.value;
		// username.value = "";
		// password.value = "";
		// username.disabled = true;
		// password.disabled = true;
	}
});

window.addEventListener('load', function () {
	//? You have if/else if which means only one of these things can happen. There is an instance where we would want both to happen remember your username & display username at the top of the page.
	// if (localStorage.getItem('username') !== null) {
	// 	// console.log(localStorage.getItem('username')); //? Just clearing out the console
	// 	username.value = localStorage.getItem('username');
	// 	rememberMe.checked = true;
	// } else if (sessionStorage.getItem('user') !== null) {
	// 	// user.value = sessionStorage.getItem("user");
	// 	user.innerHTML = sessionStorage.getItem('user'); //? We want to use innerHTML not value on the div to write inside of it.
	// }

	//! Written as two separate if stmts this allows both, or one, or none.
	if (localStorage.getItem('username') !== null) {
		// console.log(localStorage.getItem('username')); //? Just clearing out the console
		username.value = localStorage.getItem('username');
		rememberMe.checked = true;
	}
	if (sessionStorage.getItem('user') !== null) {
		user.innerHTML = sessionStorage.getItem('user');
	}
});

logoutBtn.addEventListener('click', function (e) {
	sessionStorage.clear(); //? Nice! We can just clear everything since there is only the one thing there. However if we had multiple we would want to use sessionStorage.removeItem('user');
	window.location.replace('index.html');
});
