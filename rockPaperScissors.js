(function() {
  var playerChoiceDiv = document.getElementById('player-choice');
  var gameDataDiv = document.getElementById('game-data');
  var winnerDiv = document.getElementById('winner');
  var reset = document.getElementsByClassName('reset')[0];


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

    matchesNode.innerHTML++;

    if (player === opponent) {
      tiedNode.innerHTML++;
      winnerDiv.innerHTML = 'The result is a tie!';
    } else if (playerWins1 || playerWins2 || playerWins3) {
      wonNode.innerHTML++;
      winnerDiv.innerHTML = 'You win!';
    } else {
      lostNode.innerHTML++;
      winnerDiv.innerHTML = 'Sorry, your opponent won.';
    }
  }

  function resetScores() {
    var wonNode = document.getElementById('won');
    var lostNode = document.getElementById('lost');
    var tiedNode = document.getElementById('ties');
    var matchesNode = document.getElementById('matches');

    gameDataDiv.innerHTML = '';
    winnerDiv.innerHTML = '';
    matchesNode.innerHTML = 0;
    tiedNode.innerHTML = 0;
    wonNode.innerHTML = 0;
    lostNode.innerHTML = 0;
  }

  playerChoiceDiv.addEventListener('click', playGame);
  reset.addEventListener('click', resetScores);

})();