

let signUpData = JSON.parse(localStorage.getItem("userData")) || [];
document.querySelector("form").addEventListener("submit", getData);

function getData(e) {
  event.preventDefault();

  let obj = {};

  let email = document.getElementById("email").value;
  console.log(email);
  let phnNum = document.getElementById("phnNum").value;
  let password = document.getElementById("password").value;

  obj.email = email;
  obj.phnNum = phnNum;
  obj.password = password;

  signUpData.push(obj);

  console.log(signUpData);
  alert("Sign up success");
  localStorage.setItem("userData", JSON.stringify(signUpData));
  window.location.href = "login.html";
}