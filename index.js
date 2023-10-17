var randomNumber1;
var randomNumber2;
var player1Counter = 0;
var tiesCounter = 0;
var player2Counter = 0;
let isClickDisabled = false;

function randomNumbers() {
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
}

function changeBackground() {
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

  img1.classList.add("spin");
  img2.classList.add("spin");

  setTimeout(() => {
    img1.classList.remove("spin");
    img2.classList.remove("spin");
  }, 700);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function prikaziKockice() {
  if (isClickDisabled) {
    return;
  }

  var zvuk = new Audio("./sounds/diceSound.mp3");
  zvuk.play();

  isClickDisabled = true;
  document.getElementById("clickMe").style.pointerEvents = "none";
  for (let i = 0; i < 6; i++) {
    randomNumbers();
    changeBackground();
    await sleep(100);
  }

  isClickDisabled = false;
  document.getElementById("clickMe").style.pointerEvents = "auto";

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

function resetuj() {
  location.reload();
}
