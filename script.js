const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

// Show existing user button if credentials exist
window.onload = function () {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        existing.style.display = "block";
    }
};

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const user = username.value;
    const pass = password.value;

    alert("Logged in as " + user);

    if (checkbox.checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
});

existing.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");

    alert("Logged in as " + savedUsername);
});//your JS code here. If required.
