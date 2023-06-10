let userData = JSON.parse(localStorage.getItem("userData"));

document.querySelector("form").addEventListener("submit", compare);

function compare(e) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let isValid = userData.filter(function (e) {
    return email == e.email && password == e.password;
  });

  if (isValid.length !== 0) {
    alert("Login Successfull!");
  } else {
    alert("Wrong Credentials");
  }
}