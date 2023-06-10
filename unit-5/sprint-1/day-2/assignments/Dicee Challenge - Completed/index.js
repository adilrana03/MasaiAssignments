let roll = document.getElementById("roll");
roll.addEventListener("click", diceroll);


function diceroll() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);


  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


  var randomNumber3 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource3 = "images/dice" + randomNumber3 + ".png";
  document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);


  //If player 1 wins
  if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3 ) {
    document.getElementById("winner").innerHTML = "Play 1 Wins!";
    document.getElementById("p1").style.background = "green";
    document.getElementById("p2").style.background = "yellow";
    document.getElementById("p3").style.background = "red";
  }

  // if player 2 wins
  else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
    document.getElementById("winner").innerHTML = "Player 2 Wins!";
    document.getElementById("p2").style.background = "green";
    document.getElementById("p1").style.background = "yellow";
    document.getElementById("p3").style.background = "red";


  }
  // if Player 3 wins
  else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2) {
    document.getElementById("winner").innerHTML = "Player 3 Wins! ";
    document.getElementById("p3").style.background = "green";
    document.getElementById("p2").style.background = "yellow";
    document.getElementById("p1").style.background = "red";
  }
  // if Draw
  // else (randomNumber1 == randomNumber2 || randomNumber2 == randomNumber3 || randomNumber1 == randomNumber3)
  else {
    document.getElementById("winner").innerHTML = "Draw!";
    document.getElementById("p1").style.background = "blue";
    document.getElementById("p2").style.background = "blue";
    document.getElementById("p3").style.background = "blue";

  }

}

