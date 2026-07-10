let form = document.getElementById("form");
let existing = document.getElementById("existing");

let savedUsername = localStorage.getItem("username");
let savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
    existing.style.display = "block";
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let checkbox = document.getElementById("checkbox").checked;

    alert("Logged in as " + username);

    if (checkbox) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
});


existing.addEventListener("click", function() {
    let user = localStorage.getItem("username");
    alert("Logged in as " + user);
});