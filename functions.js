function winnerAnimation() {
  setTimeout(function () {
    document.getElementById("gameOver").classList.remove("d-none");
  }, 1000);
  setTimeout(function () {
    document.getElementById("restartBtn").classList.remove("d-none");
  }, 1075);
}


function noWinnerAnimation() {
  setTimeout(function () {
    document.getElementById("noWinner").classList.remove("d-none");
  }, 1000);
  setTimeout(function () {
    document.getElementById("gameOver").classList.remove("d-none");
    document.getElementById("restartBtn").classList.remove("d-none");
  }, 1075);
}


function selectetField0to2() {
  return fields[0] == fields[1] && fields[1] == fields[2] && fields[0];
}


function selectetField3to5() {
  return fields[3] == fields[4] && fields[4] == fields[5] && fields[3];
}


function selectetField6to8() {
  return fields[6] == fields[7] && fields[7] == fields[8] && fields[6];
}


function selectetField0to6() {
  return fields[0] == fields[3] && fields[3] == fields[6] && fields[0];
}


function selectetField1to7() {
  return fields[1] == fields[4] && fields[4] == fields[7] && fields[1];
}


function selectetField2to8() {
  return fields[2] == fields[5] && fields[5] == fields[8] && fields[2];
}


function selectetField0to8() {
  return fields[0] == fields[4] && fields[4] == fields[8] && fields[0];
}


function selectetField2to6() {
  return fields[2] == fields[4] && fields[4] == fields[6] && fields[2];
}


function noWinner(rounds, winner){
  return rounds > 8 && winner === undefined
}


function circleIsVisible() {
  document.getElementById("player-1").classList.remove("playerInactive");
  document.getElementById("player-2").classList.add("playerInactive");
}


function crossIsVisible() {
  document.getElementById("player-1").classList.add("playerInactive");
  document.getElementById("player-2").classList.remove("playerInactive");
}


function horizontalLine(line) {
  if (line === 1) {
    document.getElementById(`winnerLine1`).style.transform = "scaleX(1.2)";
    document.getElementById(`winnerLine1`).classList.remove("d-none");
  }
  if (line === 2) {
    document.getElementById("winnerLine2").style.transform = "scaleX(1.2)";
    document.getElementById("winnerLine2").classList.remove("d-none");
  }
  if (line === 3) {
    document.getElementById("winnerLine3").style.transform = "scaleX(1.2)";
    document.getElementById("winnerLine3").classList.remove("d-none");
  }
}


function vertikalLine(line) {
  if (line === 4) {
    document.getElementById("winnerLine4").style.transform =
      "rotate(90deg) scaleX(1.2)";
    document.getElementById("winnerLine4").classList.remove("d-none");
  }
  if (line === 5) {
    document.getElementById("winnerLine5").style.transform =
      "rotate(90deg) scaleX(1.2)";
    document.getElementById("winnerLine5").classList.remove("d-none");
  }
  if (line === 6) {
    document.getElementById("winnerLine6").style.transform =
      "rotate(90deg) scaleX(1.3)";
    document.getElementById("winnerLine6").classList.remove("d-none");
  }
}


function slatingLine(line) {
  if (line === 7) {
    document.getElementById("winnerLine7").style.transform =
      "rotate(45deg) scaleX(1.6)";
    document.getElementById("winnerLine7").classList.remove("d-none");
  }
  if (line === 8) {
    document.getElementById("winnerLine8").style.transform =
      "rotate(-45deg) scaleX(1.6)";
    document.getElementById("winnerLine8").classList.remove("d-none");
  }
}


function renderScore(winner) {
  if (winner == "cross") {
    crossWins++;
    document.getElementById("crossScore").innerHTML =
      "<span>Cross: </span>" + crossWins;
  } else {
    circleWins++;
    document.getElementById("circleScore").innerHTML =
      "<span>Circle: </span>" + circleWins;
  }
}


function resetScoreHTML() {
  document.getElementById("circleScore").innerHTML = "<span>Circle</span>";
  document.getElementById("crossScore").innerHTML = "<span>Cross</span>";
}
