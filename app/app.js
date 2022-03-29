// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

const signInForm = document.querySelector('#sign-in-form')
const signUpForm = document.querySelector('#sign-up-form')
$(() => {
  // buttons to show/hide auth buttons
  $('#show-sign-in-btn').on('click', () => {
    if (signInForm.style.display === 'none') {
      signInForm.style.display = 'block'
      $('#show-sign-in-btn').hide()
    } else {
      signInForm.style.display = 'none'
    } $('#auth-display').text('')
    $('#show-sign-in-btn').text('Log In')
  })

  $('#new-user-btn').on('click', () => {
    if (signUpForm.style.display === 'none') {
      signUpForm.style.display = 'block'
    } else {
      signUpForm.style.display = 'none'
    } $('#auth-display').text('')
  })

  // Auth event listeners
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-out-btn').on('click', authEvents.onSignOut)

  // game event listeners
  $('#new-game-btn').on('click', gameEvents.onStartNewGame)
  $('.cell').on('click', gameEvents.onCellClick)
  $('#restart-btn').on('click', gameEvents.onRestartGame)
})
