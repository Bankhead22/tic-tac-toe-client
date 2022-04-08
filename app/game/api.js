const store = require('../store.js')
const config = require('../config.js')

const newGame = () => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const restartGame = () => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateGame = (index, value, over) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game:
      {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}

module.exports = {
  newGame,
  restartGame,
  updateGame

}
