const SICCOR = 'siccor'
const ROCK = 'rock'
const PAPER = 'paper'

const compareLogicWins = {
  rock: SICCOR,
  paper: ROCK,
  siccor: PAPER
}

const userBtns = document.querySelectorAll('.user_btns button');
const computer_btns = document.querySelectorAll('.computer_btns button');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');
let user_select = null
let computer_select = null

reset.addEventListener('click', clearAllBtn)


const c_rock = document.getElementById('c_rock');
const c_paper = document.getElementById('c_paper');
const c_siccor = document.getElementById('c_siccor');

function clearAllBtn(){
  user_select = null
  computer_select = null

  const allBtn = document.querySelectorAll('button');
  allBtn.forEach(v=> v.classList.remove('selected'))

  result.innerText = ""

}

function random(){
  return Math.floor(Math.random() * 3);
}

function selectForComputer(){
  let btn = computer_btns[random()]
      btn.classList.add('selected')
      computer_select = btn.id

      const val = compare(user_select,computer_select)

      result.innerText = displayResult(val)
}

userBtns.forEach((current_btn) => {
  current_btn.addEventListener('click', () => {
    clearAllBtn()
    current_btn.classList.add('selected')
    user_select = current_btn.id
    setTimeout(() => {
      selectForComputer()
    },500 );
  })
})

function compare(userSelected, compSelected){

  if(compareLogicWins[userSelected] == compSelected) return 1
  if(compSelected == userSelected) return 0
  return -1
}

function displayResult(value) {
  if(value == 1) {
    return "YOU WIN"
  }
  if(value == -1) {
    return "YOU LOOSE"
  }
  if(value == 0) {
    return "TIE"
  }
}


