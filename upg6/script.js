const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const blockElem = document.querySelectorAll('[dataBlock]')
const playArea = document.getElementById('playArea')
const winMsgElem = document.getElementById('winMsg')
const resBtn = document.getElementById('btn1')
const winMsgTxtElem = document.querySelector('[dataWinMsgTxt]')
let circleTurn

startGame()

resBtn.addEventListener('click', startGame)

function startGame() {
  circleTurn = false
  blockElem.forEach(block => {
    block.classList.remove(X_CLASS)
    block.classList.remove(CIRCLE_CLASS)
    block.removeEventListener('click', handleClick)
    block.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winMsgElem.classList.remove('show')
}

function handleClick(e) {
  const block = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(block, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setPlayAreaHoverClass()
  }
}

function endGame(draw) {
  if (draw) {
    winMsgElem.innerText = 'Draw!'
  } else {
    winMsgElem.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
  }
  winMsgElem.classList.add('show')
}

function isDraw() {
  return [...blockElem].every(block => {
    return block.classList.contains(X_CLASS) || block.classList.contains(CIRCLE_CLASS)
  })
}

function placeMark(block, currentClass) {
  block.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}

function setPlayAreaHoverClass() {
  playArea.classList.remove(X_CLASS)
  playArea.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    playArea.classList.add(CIRCLE_CLASS)
  } else {
    playArea.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}