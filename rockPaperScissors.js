(function() {
  var playerChoiceDiv = document.getElementById('player-choice');
  var gameDataDiv = document.getElementById('game-data');
  var winnerDiv = document.getElementById('winner');
  var reset = document.getElementsByClassName('reset')[0];
  var matches = 0;
  var playerWon = 0;
  var playerLost = 0;
  var tiedGames = 0;


function playGame(e) {
  var player = e.target.getAttribute('data-choice');
  var opponent = opponentChoice();

  e.stopPropagation();
  choicesText(player, opponent);
  getWinner(player, opponent);
}


function opponentChoice() {
  var num = Math.floor(Math.random() * 3); //range of 0 - 2

  switch(num) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}


function choicesText(player, opponent) {
 gameDataDiv.innerHTML = 'Player chose ' +  player + '. Opponent chose ' + opponent + '.';
}


function getWinner(player, opponent) {
  var playerWins1 = player === 'rock' && opponent === 'scissors';
  var playerWins2 = player === 'paper' && opponent === 'rock';
  var playerWins3 = player === 'scissors' && opponent === 'paper';
  var wonNode = document.getElementById('won');
  var lostNode = document.getElementById('lost');
  var tiedNode = document.getElementById('ties');
  var matchesNode = document.getElementById('matches');

  matches++;
  matchesNode.innerHTML = matches;

  if (player === opponent) {
    tiedGames++;
    tiedNode.innerHTML = tiedGames;
    winnerDiv.innerHTML = 'The result is a tie!';
  } else if (playerWins1 || playerWins2 || playerWins3) {
    playerWon++;
    wonNode.innerHTML = playerWon;
    winnerDiv.innerHTML = 'You win!';
  } else {
    playerLost++;
    lostNode.innerHTML = playerLost;
    winnerDiv.innerHTML = 'Sorry, your opponent won.';
  }
}

function resetScores() {
  var wonNode = document.getElementById('won');
  var lostNode = document.getElementById('lost');
  var tiedNode = document.getElementById('ties');
  var matchesNode = document.getElementById('matches');

  matches = 0;
  tiedGames = 0;
  playerWon = 0;
  playerLost = 0;

  gameDataDiv.innerHTML = '';
  winnerDiv.innerHTML = '';
  matchesNode.innerHTML = matches;
  tiedNode.innerHTML = tiedGames;
  wonNode.innerHTML = playerWon;
  lostNode.innerHTML = playerLost;
}


reset.addEventListener('click', resetScores);
playerChoiceDiv.addEventListener('click', playGame);


})();