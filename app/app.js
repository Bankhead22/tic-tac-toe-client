// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  // Auth event listeners
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-btn').on('click', authEvents.onSignOut)

  // game event listeners
  $('#new-game-btn').on('click', gameEvents.onStartNewGame)
  $('.cell').on('click', gameEvents.onCellClick)
  $('#restart-btn').on('click', gameEvents.onRestartGame)
})
