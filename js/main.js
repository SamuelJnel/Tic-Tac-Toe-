let turn = 1;
let winner = null;
let displayText;
const blankSpace = [null, null, null, null, null, null, null, null, null];

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let gameBoard = document.querySelectorAll(".game-container");
gameBoard = blankSpace;

let playSquares = document.querySelectorAll(".square");

let reSetBtn = document.querySelector(".reset-btn");

let displayResults = document.querySelector(".display-results");

playSquares.forEach((el) => el.addEventListener("click", gameBoardFunct));

reSetBtn.addEventListener("click", reSet);

function switchTurn(el) {
  turn == 1 ? (turn = -1) : (turn = 1);
  // if turn 1 is true switch to trun -1 if false switch to turn 1.
}

function gameBoardFunct(evt) {
  displayText = evt.target;
  let boxClicked = evt.target.id;
  if (evt.target.innerText != "") return;
  if (winner) return;
  if (turn == 1) {
    displayText.style.color = "#346751";
    displayText.innerHTML = "X";
  } else {
    turn = -1;
    displayText.style.color = "#DA0037";
    displayText.innerHTML = "O";
  }

  blankSpace[boxClicked] = evt.target.innerText;
  findWinner();
  switchTurn();
  console.log(gameBoard);
}

function findWinner() {
  winCombinations.forEach(function (el, idx) {
    if (
      blankSpace[el[0]] &&
      blankSpace[el[0]] === blankSpace[el[1]] &&
      blankSpace[el[0]] === blankSpace[el[2]]
    ) {
      winner = blankSpace[el[0]];
      displayResults.innerHTML = `${winner} has won!`;
    } else if (!winner) {
      if (
        blankSpace[el[0]] &&
        blankSpace[el[0]] != blankSpace[el[1]] &&
        blankSpace[el[0]] != blankSpace[el[2]] &&
        !blankSpace.includes(null)
      ) {
        displayResults.innerHTML = ` It's a tie!`;
      }
    }
  });
}

function reSet() {
  turn = 1;
  gameBoard.fill(null);
  playSquares.forEach((el) => (el.innerHTML = " "));
  displayResults.innerHTML = `Who will win?`;
  winner = null;
}
