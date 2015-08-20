$(function() {
  var $playerChoiceDiv = $('#player-choice');
  var $gameDataDiv = $('#game-data');
  var $winnerDiv = $('#winner');
  var $reset = $('.reset').first();
  var $wonNode = $('#won');
  var $lostNode = $('#lost');
  var $tiedNode = $('#ties');
  var $matchesNode = $('#matches');


  function playGame(evt) {
    var $evt = $(evt.target);
    var $player = $evt.attr('data-choice');
    var opponent = opponentChoice();

    if ($evt.is('.image-holder')) {
      //get the value of the child data-choice
      $player = $evt.children().attr('data-choice');
    }

    evt.stopPropagation();
    choicesText($player, opponent);
    getWinner($player, opponent);
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
   $gameDataDiv.html('Player chose ' +  player + '. Opponent chose ' + opponent + '.');
  }


  function getWinner(player, opponent) {
    var playerWins1 = player === 'rock' && opponent === 'scissors';
    var playerWins2 = player === 'paper' && opponent === 'rock';
    var playerWins3 = player === 'scissors' && opponent === 'paper';

    $matchesNode.html(parseInt($($matchesNode).html(), 10) + 1);
    //10 is wtf radix value??...also, thank you stackoverflow for this parseInt tip w/ .html()

    if (player === opponent) {
      $tiedNode.html(parseInt($($tiedNode).html(), 10) + 1);
      $winnerDiv.html('The result is a tie!');
    } else if (playerWins1 || playerWins2 || playerWins3) {
      $wonNode.html(parseInt($($wonNode).html(), 10) + 1);
      $winnerDiv.html('You win!');
    } else {
      $lostNode.html(parseInt($($lostNode).html(), 10) + 1);
      $winnerDiv.html('Sorry, your opponent won.');
    }
  }

  function resetScores() {
    $gameDataDiv.html('');
    $winnerDiv.html('');
    $matchesNode.html(0);
    $tiedNode.html(0);
    $wonNode.html(0);
    $lostNode.html(0);
  }

  $playerChoiceDiv.on('click', playGame);
  $reset.on('click', resetScores);

});