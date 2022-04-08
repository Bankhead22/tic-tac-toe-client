const store = require('../store.js')

const onSignUpSuccess = () => {
  $('#auth-display').text('User signed up successfully')
  $('#sign-up-form').hide()
  $('#new-user-btn').hide()
  $('form').trigger('reset')
}

const onSignUpFailure = () => {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = (response) => {
  $('#auth-display').text('User signed in successfully')
  $('form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#show-sign-in-btn').hide()
  $('#new-user-btn').hide()
  $('#sign-out-btn').show()
  $('#new-game-btn').show()
  store.user = response.user
}

const onSignInFailure = () => {
  $('#auth-display').text('Error while signing in')
}

const onSignOutSuccess = () => {
  $('#auth-display').text('User Signed out successfully')
  $('form').trigger('reset')
  $('#show-sign-in-btn').show()
  $('#sign-out-btn').hide()
  $('#game-board').hide()
  $('#new-game-btn').hide()
  $('#restart-btn').hide()
  $('#new-user-btn').show()
  $('#score-board-x').text(0)
  $('#score-board-o').text(0)
  $('#show-sign-in-btn').text('Log In')
  $('#new-user-btn').text('New User?')
}

const onSignOutFailure = () => {
  $('#auth-display').text('Could not sign out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure

}
