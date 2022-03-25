const store = require('../store.js')

const signUp = (data) => {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    data
  })
}

const signOut = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newGame = () => {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    data: '{}',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const cellClick = (data, id) => {
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + id,
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  cellClick
}
