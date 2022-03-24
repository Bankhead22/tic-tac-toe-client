const store = require('../store.js')

const signUp = (data) => {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: 'https://library-express-api.herokuapp.com/sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://library-express-api.herokuapp.com/sign-in',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://library-express-api.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}
