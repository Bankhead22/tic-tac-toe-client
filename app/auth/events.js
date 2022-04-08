const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  if (data.credentials.password !== data.credentials.password_confirmation) {
    $('#auth-display').html('<p>Passwords do not match</p>')
  } else {
    api
      .signUp(data)
      .then(() => ui.onSignUpSuccess())
      .catch(() => ui.onSignUpFailure())
  }
}

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  api
    .signIn(data)
    .then((response) => ui.onSignInSuccess(response))
    .catch(() => ui.onSignInFailure())
}

const onSignOut = () => {
  api
    .signOut()
    .then(() => ui.onSignOutSuccess())
    .catch(() => ui.onSignOutFailure())
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut

}
