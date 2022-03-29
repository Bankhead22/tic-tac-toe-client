const store = require('../store')

const onNewGameSuccess = (response) => {
  $('#game-board').show()
  $('#game-display').html("Lets play! It's x's turn")
  $('#restart-btn').show()
  $('#new-game-btn').hide()
  $('#auth-display').text('')
  store.game = response.game
}

const onNewGameFailure = () => {
  $('#auth-display').html('<p>Could not load new game</p>')
}

const onRestartSuccess = (response) => {
  $('#0,#1,#2,#3,#4,#5,#6,#7,#8').css('color', 'black')
  $('#game-display').text('New game! It\'s x\'s turn')
  $('#results-message').text('')
  store.game = response.game
}

const onRestartFail = () => {
  $('#game-display').text('Try again')
}

const onUpdateGameSuccess = (response) => {
  const cells = response.game.cells
  if (response.game.cells.includes('') === false) {
    $('#game-display').text('')
    $('#results-message').text('It\'s a tie!')
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
      $('#results-message').text('X wins by first column!')
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
      $('#results-message').text('X wins by diagonal!')
    }
    if (cells[2] === 'o' && cells[2] === cells[4] && cells[2] === cells[6]) {
      $('#game-display').text('')
      $('#results-message').text('o wins by diagonal!')
    }
  }

  store.game = response.game
}

const onUpdateGameFailure = () => {
  console.log('failure!')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onRestartSuccess,
  onRestartFail,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
