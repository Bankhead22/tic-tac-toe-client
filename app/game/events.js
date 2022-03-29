'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onStartNewGame = () => {
  currentMove = 'x'
  gameOver = false
  api
    .newGame()
    .then((response) => ui.onNewGameSuccess(response))
    .catch(() => ui.onNewGameFailure())
}

const onRestartGame = () => {
  currentMove = 'x'
  gameOver = false

  api
    .restartGame()
    .then((response) => ui.onRestartSuccess(response))
    .catch(() => ui.onRestartFail())
  $('.cell').text('')
  $('.cell').on('click', onCellClick)
}

let currentMove = 'x'
let gameOver = false
let gameArr = []
store.numTurns = 0

const nextMove = () => {
  if (currentMove !== 'x') {
    currentMove = 'x'
  } else {
    currentMove = 'o'
  }
}

/*
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
 board layout

    [0][1][2]
    [3][4][5]
    [6][7][8]
*/

const checkForWinner = (index, value) => {
  gameOver = false
  gameArr = []
  // populate game array with index of cell which value of 'x' or 'o' is found
  for (let i = 0; i < 9; i++) {
    if (store.game.cells[i] === value) {
      gameArr.push(i)
    }
  }
  // Check for all possible winning conditions.
  // if 3 in a row highlight red && gameOver = true
  if (
    gameArr.indexOf(0) !== -1 &&
    gameArr.indexOf(1) !== -1 &&
    gameArr.indexOf(2) !== -1
  ) {
    gameOver = true
    $('#0,#1,#2').css('color', 'red')
    $('.cell').off('click')
  }
  if (
    gameArr.indexOf(3) !== -1 &&
    gameArr.indexOf(4) !== -1 &&
    gameArr.indexOf(5) !== -1
  ) {
    gameOver = true
    $('#3,#4,#5').css('color', 'red')
    $('.cell').off('click')
  }
  if (
    gameArr.indexOf(6) !== -1 &&
    gameArr.indexOf(7) !== -1 &&
    gameArr.indexOf(8) !== -1
  ) {
    gameOver = true
    $('#6,#7,#8').css('color', 'red')
    $('.cell').off('click')
  }
  if (
    gameArr.indexOf(0) !== -1 &&
    gameArr.indexOf(3) !== -1 &&
    gameArr.indexOf(6) !== -1
  ) {
    gameOver = true
    $('#0,#3,#6').css('color', 'red')
    $('.cell').off('click')
  }
  if (
    gameArr.indexOf(1) !== -1 &&
    gameArr.indexOf(4) !== -1 &&
    gameArr.indexOf(7) !== -1
  ) {
    gameOver = true
    $('#1,#4,#7').css('color', 'red')
    $('.cell').off('click')
  }
  if (
    gameArr.indexOf(2) !== -1 &&
    gameArr.indexOf(5) !== -1 &&
    gameArr.indexOf(8) !== -1
  ) {
    gameOver = true
    $('#2,#5,#8').css('color', 'red')
    $('.cell').off('click')
  }
  if (
    gameArr.indexOf(0) !== -1 &&
    gameArr.indexOf(4) !== -1 &&
    gameArr.indexOf(8) !== -1
  ) {
    gameOver = true
    $('#0,#4,#8').css('color', 'red')
    $('.cell').off('click')
  }
  if (
    gameArr.indexOf(2) !== -1 &&
    gameArr.indexOf(4) !== -1 &&
    gameArr.indexOf(6) !== -1
  ) {
    gameOver = true
    $('#2,#4,#6').css('color', 'red')
    $('.cell').off('click')
  }
  onUpdateGame(index, currentMove, gameOver)
}

const onCellClick = (event) => {
  // message if cell is taken
  if (event.target.innerHTML !== '') {
    $('#game-display').text('Already taken! Try another space! It\'s ' + currentMove + '\'s turn!')
  }
  // if cell is empty:
  if (event.target.innerHTML === '') {
    // cell becomes current move then check for winner
    $(event.target).text(currentMove)
    // game cell value becomes current move
    store.game.cells[event.target.id] = currentMove
    store.numTurns += 1
    console.log(store.numTurns)
    checkForWinner(event.target.id, currentMove)
    nextMove()
    $('#game-display').text("It's " + currentMove + "'s turn!")
  }
}

const onUpdateGame = (index, value, over) => {
  api
    .updateGame(index, value, over)
    .then((response) => ui.onUpdateGameSuccess(response))
    .catch(() => ui.onUpdateGameFailure())
}

module.exports = {
  onStartNewGame,
  onRestartGame,
  onCellClick,
  onUpdateGame
}
