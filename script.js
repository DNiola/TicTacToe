let fields = [];
let gameOver = false;
let currentShape = "circle";
let rounds = [];
let circleWins = [];
let crossWins = [];


function fillShape(id) {
  if (!fields[id] && !gameOver) {
    if (currentShape == "cross") {
      currentShape = "circle";
      circleIsVisible();
    } else {
      currentShape = "cross";
      crossIsVisible();
    }
    fields[id] = currentShape;
    console.log(fields);
    draw();
    checkForWin();
  }
}


function restart() {
  gameOver = false;
  fields = [];
  rounds = [];
  document.getElementById("noWinner").classList.add("d-none");
  document.getElementById("gameOver").classList.add("d-none");
  document.getElementById("restartBtn").classList.add("d-none");
  for (let i = 1; i < 9; i++) {
    document.getElementById("winnerLine" + i).classList.add("d-none");
  }
  for (let i = 0; i < 9; i++) {
    document.getElementById("circle-" + i).classList.add("d-none");
    document.getElementById("cross-" + i).classList.add("d-none");
  }
}


function draw() {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] == "circle") {
      document.getElementById("circle-" + i).classList.remove("d-none");
    }
    if (fields[i] == "cross") {
      document.getElementById("cross-" + i).classList.remove("d-none");
    }
  }
}


function checkForWin() {
  rounds++;
  let winner;
  if (selectetField0to2()) {
    winner = fields[0];
    line = 1;
    horizontalLine(line);
  }
  if (selectetField3to5()) {
    winner = fields[3];
    line = 2;
    horizontalLine(line);
  }
  if (selectetField6to8()) {
    winner = fields[6];
    line = 3;
    horizontalLine(line);
  }
  if (selectetField0to6()) {
    winner = fields[0];
    line = 4;
    vertikalLine(line);
  }
  if (selectetField1to7()) {
    winner = fields[1];
    line = 5;
    vertikalLine(line);
  }
  if (selectetField2to8()) {
    winner = fields[2];
    line = 6;
    vertikalLine(line);
  }
  if (selectetField0to8()) {
    winner = fields[0];
    line = 7;
    slatingLine(line);
  }
  if (selectetField2to6()) {
    winner = fields[2];
    line = 8;
    slatingLine(line);
  }
  if (noWinner(rounds, winner)) {
    gameOver = true;
    noWinnerAnimation();
  }
  if (winner) {
    gameOver = true;
    winnerAnimation();
    renderScore(winner);
  }
}


function resetScore() {
  crossWins = [];
  circleWins = [];
  if (currentShape == "cross") {
    currentShape = "circle";
    circleIsVisible();
  } else {
    currentShape = "cross";
    crossIsVisible();
  }
  resetScoreHTML();
  restart();
}
