const form = document.querySelector("form");

const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

window.addEventListener("load", () => {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        existing.style.display = "block";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Logged in as " + username.value);

    if (checkbox.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
});

existing.addEventListener("click", () => {
    alert("Logged in as " + localStorage.getItem("username"));
});