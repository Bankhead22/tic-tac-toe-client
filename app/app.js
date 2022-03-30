// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

const signInForm = document.querySelector('#sign-in-form')
const signUpForm = document.querySelector('#sign-up-form')
$(() => {
  // buttons to show/hide auth buttons
  $('#show-sign-in-btn').on('click', () => {
    $('#show-sign-in-btn').html('Close')

    if (signInForm.style.display === '') {
      signInForm.style.display = 'block'
    } else if (signInForm.style.display !== '') {
      $('#auth-display').text('')
      $('#show-sign-in-btn').text('Log In')
      signInForm.style.display = ''
    }
  })

  $('#new-user-btn').on('click', () => {
    $('#new-user-btn').text('Close')

    if (signUpForm.style.display === '') {
      signUpForm.style.display = 'block'
    } else if (signUpForm.style.display !== '') {
      $('#new-user-btn').text('New User?')
      $('#auth-display').text('')
      signUpForm.style.display = ''
    }
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
