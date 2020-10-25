var username = document.getElementById('username');

var user = document.querySelector('#user');

var password = document.querySelector('#password');

var userLabel = document.querySelector('#userLabel');

var passLabel = document.querySelector('label[for=password]');

var rememberMe = document.querySelector('input[type=checkbox]');

var submitBtn = document.querySelector('button');

var logoutBtn = document.getElementById('logout');

username.addEventListener('focus', function (e) {
    userLabel.classList.add("blue");
    username.classList.add("blue-border");
});

username.addEventListener('blur', function (e) {
    userLabel.classList.remove("blue");
    username.classList.remove("blue-border");
});

password.addEventListener('focus', function (e) {
    passLabel.classList.add("blue");
    password.classList.add("blue-border");
});

password.addEventListener('blur', function (e) {
    passLabel.classList.remove("blue");
    password.classList.remove("blue-border");
}); 

rememberMe.addEventListener('click', function (e) {
    if(rememberMe.checked) {
        alert("We will remember your username.");
    } 
});

submitBtn.addEventListener('click', function (e) {
        /*e.preventDefault();*/ if(username.value === "" && password.value === "") {
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

window.addEventListener('load', function(e) {
    if (localStorage.username.value !== null) {
        username = localStorage.username.value;
        rememberMe.checkbox.checked = true;
    }
    else {
        user.innerHTML =sessionStorage.user.value;
    }
});

logoutBtn.addEventListener('click', function(e) {
    if (logoutBtn.addEventListener === 'click') {
        sessionStorage.clear();
    }
});

"window.location.replace('index.html');"
