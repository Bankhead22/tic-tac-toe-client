const onNewGameSuccess = () => {
  $('#game-board').show()
  $('#game-display').html('lets play!')
  $('#restart-btn').show()
}

const onNewGameFailure = () => {
  $('#auth-display').html('<p>Could not load new game</p>')
}

const onRestartSuccess = () => {
  $('.cell').text('')
  $('#game-display').text('New game! It\'s X\'s turn')
}

const onRestartFail = () => {
  $('#game-display').text('gotta work on that one chief')
}

/*
    [0][1][2]
    [3][4][5]
    [6][7][8]
*/

const moveSuccess = function (response) {
  const clickedCell = response.game.cells

  console.log(clickedCell)
}

const moveFail = function () {
  $('#game-display').text('Failed to update young blood')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onRestartSuccess,
  onRestartFail,
  moveSuccess,
  moveFail
}
