var randomNumber1;
var randomNumber2;
var player1Counter = 0;
var tiesCounter = 0;
var player2Counter = 0;

function randomNumbers() {
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
}

function prikaziKockice() {
  randomNumbers();
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.getElementById("Player1").innerHTML = "Player 1 WINS!";
    document.getElementById("Player2").innerHTML = "Player 2";
    document.getElementById("Player1Result").innerHTML = ++player1Counter;
    document.querySelector("h1").innerHTML = " 🏆 Click Me 🏴‍☠️";
  } else if (randomNumber1 < randomNumber2) {
    document.getElementById("Player1").innerHTML = "Player 1";
    document.getElementById("Player2").innerHTML = " Player 2 WINS!";
    document.getElementById("Player2Result").innerHTML = ++player2Counter;
    document.querySelector("h1").innerHTML = "🏴‍☠️ Click Me 🏆";
  } else {
    document.getElementById("Player1").innerHTML = " Player 1";
    document.getElementById("Player2").innerHTML = " Player 2";
    document.getElementById("TiesResult").innerHTML = ++tiesCounter;
    document.querySelector("h1").innerHTML = "🏳️ Click Me 🏳️";
  }
}
