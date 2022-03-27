const store = require('../store.js')

const onSignUpSuccess = () => {
  $('#auth-display').html('<p>User signed up successfully</p>')
  $('form').trigger('reset')
}

const onSignUpFailure = () => {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = (response) => {
  $('#auth-display').html('<p>User signed in successfully</p>')
  $('form').trigger('reset')
  $('#sign-in-btn').hide()
  $('#sign-out-btn').show()
  $('#new-game-btn').show()
  console.log(response)
  store.user = response.user
}

const onSignInFailure = () => {
  $('#auth-display').html('<p>Error while signing in</p>')
}

const onSignOutSuccess = () => {
  $('#auth-display').html('<p>User Signed out successfully</p>')
  $('form').trigger('reset')
  $('#sign-in-btn').show()
  $('#sign-out-btn').hide()
  $('#game-board').hide()
  $('#new-game-btn').hide()
}

const onSignOutFailure = () => {
  $('#auth-display').html('<p>Could not sign out</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure

}
