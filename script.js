// Player One
let playerOneInput = document.getElementById("player-one");
let playerOneButton = document.getElementById("player-one-button");
let playerOneInputPtag = document.getElementById("result");
// Player Two
let playerTwoInput = document.getElementById("player-two");
let playerTwoButton = document.getElementById("player-two-button");
let playerTwoInputPtag = document.getElementById("answer");

// Check button
let variable = document.getElementById("check-answer");

function playerOneNumber() {
  let numberPlayerOneValue = playerOneInput.value;
  playerOneInputPtag.innerHTML = numberPlayerOneValue;
  alert("You have chosen = " + numberPlayerOneValue);
  playerOneInput.value = "";
}

function playerTwoNumber() {
  let numberPlayerTwoValue = playerTwoInput.value;
  playerTwoInputPtag.innerHTML = numberPlayerTwoValue;
  alert("You have chosen = " + numberPlayerTwoValue);
  playerTwoInput.value = "";
}

function checkAnswer() {
  let answerPlayerOne = document.getElementById("result");
  let answerPlayerTwo = document.getElementById("answer");
  if (answerPlayerOne.innerHTML === answerPlayerTwo.innerHTML) {
    alert(`Ja det stämmer! Rätt svar är: ${answerPlayerOne.innerHTML}`);
  } else {
    alert(`Fel! Rätt svar var ${answerPlayerOne.innerHTML}`);
  }
  location.reload();
}
