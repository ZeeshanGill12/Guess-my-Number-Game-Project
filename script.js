// console.log(document.querySelector(".guess").textContent);
// document.querySelector(".guess").textContent = "Correct Number!";

// document.querySelector(".input_field").value = 20;

var secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
var score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  var givenNumber = Number(document.querySelector(".input_field").value);

  if (!givenNumber) {
    document.querySelector(".guess").textContent = "No number!";
  }
  // when player wins
  else if (givenNumber === secretNumber) {
    document.querySelector(".number_given").textContent = givenNumber;
    document.querySelector(".guess").textContent = "Correct Number!";
    document.querySelector(".section2").style.backgroundColor = "#50b365";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent =
        "High Score: " + highScore;
    } else {
    }
  } else if (givenNumber >= secretNumber) {
    if (score > 0) {
      document.querySelector(".guess").textContent = "Too High!";
      score = score - 1;

      document.querySelector(".score").textContent = "Score: " + score;
    } else {
      document.querySelector(".guess").textContent = "You Loose the Game!";
    }
  } else if (givenNumber <= secretNumber) {
    if (score > 0) {
      document.querySelector(".guess").textContent = "Too Low!";
      score = score - 1;

      document.querySelector(".score").textContent = "Score: " + score;
    } else {
      document.querySelector(".guess").textContent = "You Loose the Game!";
    }
  }
});
// Reset the game Button functionality
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = "Score: 20";
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector(".number_given").textContent = "?";
  document.querySelector(".section2").style.backgroundColor = "#ffff00";
  document.querySelector(".input_field").value = "";
  document.querySelector(".guess").textContent = "Start Guessing...";
});
