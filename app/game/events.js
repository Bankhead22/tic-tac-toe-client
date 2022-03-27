'use strict'
const api = require('./api.js')
const ui = require('./ui')

const onStartNewGame = () => {
  api
    .newGame()
    .then((response) => ui.onNewGameSuccess(response))
    .catch(() => ui.onNewGameFailure())
}

const onRestartGame = () => {
  api
    .restartGame()
    .then((response) => ui.onRestartSuccess(response))
    .catch(() => ui.onRestartFail())
}

let currentMove = 'x'

const nextMove = () => {
  if (currentMove !== 'x') {
    currentMove = 'x'
  } else {
    currentMove = 'o'
  }
}

const onCellClick = (event) => {
  // message if cell is taken
  if (event.target.innerHTML !== '') {
    $('#game-display').text('Cell is taken! Try again.')
  }

  // if cell is empty:
  if (event.target.innerHTML === '') {
    // check whose turn it is, update game board api, then switch turn
    if (currentMove === 'x') {
      $(event.target).text('x')
      nextMove()
      $('#game-display').text('O\'s turn')
    } else if (currentMove === 'o') {
      $(event.target).text('o')
      nextMove()
      $('#game-display').text('X\'s turn')
    }
    // else if ($(event.target).text() !== '') {
    //   api
    //     .updateBoard(event.target)
    //     .then(() => ui.moveSuccess())
    //     .catch(() => ui.moveFail())
    // }
  }
}

module.exports = {
  onStartNewGame,
  onCellClick,
  onRestartGame
}
