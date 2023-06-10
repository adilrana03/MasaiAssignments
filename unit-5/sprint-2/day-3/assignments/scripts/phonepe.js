
  document.querySelector("#submit").addEventListener("click", otp);
  var data = 9999999999;
  function otp() {
    event.preventDefault();
    var otp = document.getElementById("otp").value;
    var amount = document.getElementById("amount").value;
    var div = document.createElement("div");
    var msg1 = document.createElement("h2");
    msg1.innerText = "Please wait till your payment is processed !";
    div.append(msg1);
    document.querySelector("#container").append(div);

    var promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (amount >= 1 && otp == mobilenumber) {
          resolve("Payment Succesful");
        } else {
          reject("Sorry, Payment Rejected ");
        }
      }, 1000);
    });
    promise
      .then(function (abc) {
        document.querySelector("#container").style.display = "none";
        document.querySelector(".success").style.display = "block";
        var msgbox = document.createElement("div");
        var img = document.createElement("img");
        img.src =
          "https://pixlok.com/wp-content/uploads/2021/03/Tick-PNG-Icon-300x300.jpg";
        var msg2 = document.createElement("h2");
        msg2.innerHTML = "Successful Payment!";
        msgbox.append(img, msg2);
        document.querySelector(".success").append(msgbox);
        console.log("done", abc);
      })
      .catch(function (res) {
        document.querySelector("#container").style.display = "none";
        document.querySelector(".success").style.display = "block";
        var msgbox = document.createElement("div");
        var img = document.createElement("img");
        img.src =
          "https://img.freepik.com/premium-vector/white-exclamation-mark-sign-red-circle-isolated-white-background_120819-332.jpg?w=2000";
        var msg2 = document.createElement("h2");
        msg2.innerHTML = "Payment Rejected, Please try again later!";
        msgbox.append(img, msg2);
        document.querySelector(".success").append(msgbox);
        console.log("REJECT", res);
      });
  }
