//! Everything from hw#1 looked great! Consequently I don't have a lot of feedback so I added in some additional code for review in app2.js. It uses the 'input' event to fire the event so we dynamically update our input boxes, check it out and let me know if you have any questions. I have noticed a few errors w/ hw#2 but I will have that feedback up tomorrow afternoon. 

//? Just made some small formatting changes here
var username = document.getElementById('username');
var user = document.querySelector('#user');
var password = document.querySelector('#password')
var userLabel = document.querySelector('#userLabel');
var passLabel = document.querySelector('label[for=password]');
var rememberMe = document.querySelector('input[type=checkbox]');
var submitBtn = document.querySelector('button');
var logoutBtn = document.getElementById('logout');

//? I removed all the events objects that where un-used, no harm in leaving them though.
username.addEventListener('focus', function () { 
    userLabel.classList.add("blue");
    username.classList.add("blue-border");
});

username.addEventListener('blur', function () {
    userLabel.classList.remove("blue");
    username.classList.remove("blue-border");
});

password.addEventListener('focus', function () {
    passLabel.classList.add("blue");
    password.classList.add("blue-border");
});

password.addEventListener('blur', function () {
    passLabel.classList.remove("blue");
    password.classList.remove("blue-border");
}); 

rememberMe.addEventListener('click', function () {
    if(rememberMe.checked) {
        alert("We will remember your username.");
    } 
});

submitBtn.addEventListener('click', function () {
    /*e.preventDefault();*/

    if(username.value === "" && password.value === "") {
        userLabel.classList.add("error");
        username.classList.add("label","error");
        passLabel.classList.add("error");
        password.classList.add("label","error");
    }
        else if(username.value === "") {
            userLabel.classList.add("error");
            username.classList.add("label","error");
            passLabel.classList.remove("error");
            password.classList.remove("label","error");
    }
        else if(password.value === "") {
            userLabel.classList.remove("error");
            username.classList.remove("label","error");
            passLabel.classList.add("error");
            password.classList.add("label","error");
    }
        else {
            userLabel.classList.remove("error");
            username.classList.remove("label","error");
            passLabel.classList.remove("error");
            password.classList.remove("label","error");
            // user.innerHTML = username.value;
            // username.value = "";
            // password.value = "";
            // username.disabled = true;
            // password.disabled = true;
    }
    if (rememberMe.checkbox.checked === true) {
        localStorage.setItem(username, username.value);
    }
    else {
        localStorage.removeItem(username);
    }
    if (username.value.length > 0 && password.value.length > 0) {
        sessionStorage.setItem(username, username.value);
    }
});

function validateUsername () {
    if (username.value.length === 0 || username.value === /^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/) {
        return false;
    }
};

function validatePassword () {
    if (password.value.length === 0 || password.value.length > 10 || password.value.length < 6) {
        return false;
    }
};

window.addEventListener('load', function() {
    if (localStorage.username.value !== null) {
        username = localStorage.username.value;
        rememberMe.checkbox.checked = true;
    }
    else {
        user.innerHTML =sessionStorage.user.value;
    }
});

logoutBtn.addEventListener('click', function() {
    if (logoutBtn.addEventListener === 'click') {
        sessionStorage.clear();
    }
});

"window.location.replace('index.html');"
