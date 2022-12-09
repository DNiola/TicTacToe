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
  let line;
  if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
    winner = fields[0];
    line = 1;
    horizontalLine(line)
  }
  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    winner = fields[3];
    line = 2;
    horizontalLine(line)
  }
  if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
    winner = fields[6];
    line = 3;
    horizontalLine(line)
  }
  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winner = fields[0];
    line = 4;
    vertikalLine(line)
  }
  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winner = fields[1];
    line = 5;
    vertikalLine(line)
  }
  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winner = fields[2];
    line = 6;
    vertikalLine(line)
  }
  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winner = fields[0];
    line = 7;
    slatingLine(line)
  }
  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winner = fields[2];
    line = 8;
    slatingLine(line)
  }
  if (rounds > 8 && winner === undefined) {
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
  resetScoreHTML()
  restart();
}


