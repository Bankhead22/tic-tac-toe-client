const store = require('../store')

// variables for scoreboard scores
let scoreX = 0
let scoreO = 0
let scoreTie = 0

const onNewGameSuccess = (response) => {
  alert('Get 3 X\'s or O\'s in a row to win!')
  $('#game-board').show()
  $('#game-display').text('It\'s x\'s turn')
  $('#restart-btn').show()
  $('#new-game-btn').hide()
  $('#auth-display').text('')
  $('#score-board-x').text(0)
  $('#score-board-o').text(0)
  $('#score-board-tie').text(0)
  store.game = response.game
}

const onNewGameFailure = () => {
  $('#auth-display').text('Could not load new game')
}

const onRestartSuccess = (response) => {
  $('#0,#1,#2,#3,#4,#5,#6,#7,#8').css('color', 'black')
  $('#game-display').text('New game! It\'s x\'s turn')
  $('#restart-btn').text('Restart Game')
  $('#results-message').text('')
  store.game = response.game
}

const onRestartFail = () => {
  $('#game-display').text('Try again')
}

/*
winningConditions
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]
*/

// receives game state and delivers message based on result
const onUpdateGameSuccess = (response) => {
  const cells = response.game.cells
  //  .includes('') === false = all cells are full(tie)
  if (response.game.cells.includes('') === false) {
    $('#game-display').text('')
    $('#results-message').text('It\'s a tie!')
    $('#restart-btn').text('New Game')
    scoreTie++
    $('#score-board-tie').text(scoreTie)
    $('.cell').off('click')
  }
  if (response.game.over === true) {
    if (cells[0] === 'x' && cells[0] === cells[1] && cells[0] === cells[2]) {
      $('#game-display').text('')
      $('#results-message').text('x wins by first row!')
    }
    if (cells[0] === 'o' && cells[0] === cells[1] && cells[0] === cells[2]) {
      $('#game-display').text('')
      $('#results-message').text('o wins by first row!')
    }
    if (cells[3] === 'x' && cells[3] === cells[4] && cells[3] === cells[5]) {
      $('#game-display').text('')
      $('#results-message').text('x wins by second row!')
    }
    if (cells[3] === 'o' && cells[3] === cells[4] && cells[3] === cells[5]) {
      $('#game-display').text('')
      $('#results-message').text('o wins by second row!')
    }
    if (cells[6] === 'x' && cells[6] === cells[7] && cells[6] === cells[8]) {
      $('#game-display').text('')
      $('#results-message').text('x wins by third row!')
    }
    if (cells[6] === 'o' && cells[6] === cells[7] && cells[6] === cells[8]) {
      $('#game-display').text('')
      $('#results-message').text('o wins  by third row!')
    }
    if (cells[0] === 'x' && cells[0] === cells[3] && cells[0] === cells[6]) {
      $('#game-display').text('')
      $('#results-message').text('x wins by first column!')
    }
    if (cells[0] === 'o' && cells[0] === cells[3] && cells[0] === cells[6]) {
      $('#game-display').text('')
      $('#results-message').text('o wins by first column!')
    }
    if (cells[1] === 'x' && cells[1] === cells[4] && cells[1] === cells[7]) {
      $('#game-display').text('')
      $('#results-message').text('x wins by second column!')
    }
    if (cells[1] === 'o' && cells[1] === cells[4] && cells[1] === cells[7]) {
      $('#game-display').text('')
      $('#results-message').text('o wins by second column!')
    }
    if (cells[2] === 'x' && cells[2] === cells[5] && cells[2] === cells[8]) {
      $('#game-display').text('')
      $('#results-message').text('x wins by third column!')
    }
    if (cells[2] === 'o' && cells[2] === cells[5] && cells[2] === cells[8]) {
      $('#game-display').text('')
      $('#results-message').text('o wins by third column!')
    }
    if (cells[0] === 'x' && cells[0] === cells[4] && cells[0] === cells[8]) {
      $('#game-display').text('')
      $('#results-message').text('x wins by diagonal!')
    }
    if (cells[0] === 'o' && cells[0] === cells[4] && cells[0] === cells[8]) {
      $('#game-display').text('')
      $('#results-message').text('o wins by diagonal!')
    }
    if (cells[2] === 'x' && cells[2] === cells[4] && cells[2] === cells[6]) {
      $('#game-display').text('')
      $('#results-message').text('x wins by diagonal!')
    }
    if (cells[2] === 'o' && cells[2] === cells[4] && cells[2] === cells[6]) {
      $('#game-display').text('')
      $('#results-message').text('o wins by diagonal!')
    }
    // adds 1 to corresponding score and displays in scoreboard
    if ($('#results-message').text().includes('x wins')) {
      scoreX++
      $('#score-board-x').text(scoreX)
      $('#restart-btn').text('New Game')
    }
    if ($('#results-message').text().includes('o wins')) {
      scoreO++
      $('#score-board-o').text(scoreO)
      $('#restart-btn').text('New Game')
    }
  }
  // assign response game state to store?
  store.game = response.game
}

const onUpdateGameFailure = () => {
  $('#game-display').text('Try again')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onRestartSuccess,
  onRestartFail,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
