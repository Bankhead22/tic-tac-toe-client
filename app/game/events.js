'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

// api to start new game
const onStartNewGame = () => {
  currentMove = 'x'
  gameOver = false
  api
    .newGame()
    .then((response) => ui.onNewGameSuccess(response))
    .catch(() => ui.onNewGameFailure())
}

// api to restart game and clears board
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

// rules for game
let currentMove = 'x'
let gameOver = false
// empty array for game.cells to populate to
let gameArr = []

// if currentmove x change to o
const nextMove = () => { currentMove !== 'x' ? currentMove = 'x' : currentMove = 'o' }

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

// check for winner fn after cell is clicked
const checkForWinner = (index, value) => {
  gameOver = false
  gameArr = []

  // populate(push) game array with index of cell which value of 'x' or 'o' is found
  for (let i = 0; i < 9; i++) {
    if (store.game.cells[i] === value) {
      gameArr.push(i)
    }
  }
  // Check for all possible winning conditions.
  // if 3 in a row highlight red && gameOver = true
  // disable click function if winner is found
  // indexOf returns -1 if no value found in targeted index
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
  // pass index value and gameover status to update game api as params
  onUpdateGame(index, currentMove, gameOver)
}

// run if any cell is clicked on game board
const onCellClick = (event) => {
  // message if cell is taken
  if (event.target.innerHTML !== '') {
    $('#game-display').text('Already taken! Try another space! It\'s ' + currentMove + '\'s turn!')
  }
  // if cell is empty:
  if (event.target.innerHTML === '') {
    // cell text becomes current move
    $(event.target).text(currentMove)
    // game cell value becomes current move then check for winner
    store.game.cells[event.target.id] = currentMove
    // pass cell index(event.target.id?) and value(currentmove)
    checkForWinner(event.target.id, currentMove)
    // change current move then display their turn
    nextMove()
    $('#game-display').text('It\'s ' + currentMove + '\'s turn!')
  }
}

// update game api with data from check for winner
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
