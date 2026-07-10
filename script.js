const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingButton = document.getElementById("existing");

function showExistingUserButton() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingButton.style.display = "block";
  } else {
    existingButton.style.display = "none";
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Logged in as " + username.value);

  if (checkbox.checked) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  showExistingUserButton();
});

existingButton.addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    alert("Logged in as " + savedUsername);
  }
});

showExistingUserButton();