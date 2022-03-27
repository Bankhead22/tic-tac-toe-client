const store = require('../store.js')

const newGame = () => {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const restartGame = () => {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

/*
    [0][1][2]
    [3][4][5]
    [6][7][8]
*/

module.exports = {
  newGame,
  restartGame
}
