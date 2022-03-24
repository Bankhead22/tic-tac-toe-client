const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  if (data.credentials.password !== data.credentials.password_confirmation) {
    $('#auth-display').html('<p>Passwords do not match</p>')
  } else {
    authApi
      .signUp(data)
      .then(() => authUi.onSignUpSuccess())
      .catch(() => authUi.onSignUpFailure())
  }
}

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    .catch(() => authUi.onSignInFailure())
}

const onSignOut = () => {
  authApi
    .signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
