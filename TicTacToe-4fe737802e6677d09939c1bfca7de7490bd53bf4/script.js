let fields = [];
let gameOver = false;
let currentShape = "cross";

function fillShape(id) {
  if (!fields[id] && !gameOver) {
    if (currentShape == "cross") {
      currentShape = "circle";
      document.getElementById("player-1").classList.remove("playerInactive");
      document.getElementById("player-2").classList.add("playerInactive");
    } else {
      currentShape = "cross";
      document.getElementById("player-1").classList.add("playerInactive");
      document.getElementById("player-2").classList.remove("playerInactive");
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
  document.getElementById("gameOver").classList.add("d-none");
  document.getElementById("restartBtn").classList.add("d-none");

  for (let i = 1; i < 8; i++) {
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
  let winner;
  if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
    winner = fields[0];
    document.getElementById("winnerLine1").style.transform = "scaleX(1)";
  }

  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    winner = fields[3];
    document.getElementById("winnerLine2").style.transform = "scaleX(1)";
  }
  if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
    winner = fields[6];
    document.getElementById("winnerLine3").style.transform = "scaleX(1)";
  }

  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winner = fields[0];
    document.getElementById("winnerLine4").style.transform =
      "rotate(90deg) scaleX(1)";
  }
  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winner = fields[1];
    document.getElementById("winnerLine5").style.transform =
      "rotate(90deg) scaleX(1)";
  }

  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winner = fields[2];
    document.getElementById("winnerLine6").style.transform =
      "rotate(90deg) scaleX(1)";
  }
  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winner = fields[0];
    document.getElementById("winnerLine7").style.transform =
      "rotate(45deg) scaleX(1.2)";
  }

  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winner = fields[2];
    document.getElementById("winnerLine8").style.transform =
      "rotate(-45deg) scaleX(1.2)";
  }
  if (winner) {
    console.log("GEWINNER:", winner);
    gameOver = true;
    setTimeout(function () {
      document.getElementById("gameOver").classList.remove("d-none");
      document.getElementById("restartBtn").classList.remove("d-none");
    }, 1000);
  }
}
