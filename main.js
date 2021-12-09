const user_rock = document.getElementById('u_rock');
const user_paper = document.getElementById('u_paper');
const user_siccor = document.getElementById('u_siccor');

const c_rock = document.getElementById('c_rock');
const c_paper = document.getElementById('c_paper');
const c_siccor = document.getElementById('c_siccor');

const computer_btns = [c_rock, c_paper, c_siccor]

function random(){
  return Math.floor(Math.random() * 3);
}

function selectForComputer(){
  let btn = computer_btns[random()]



    if(btn.classList.contains('selected')){
      btn.classList.remove('selected')
    }else{
      btn.classList.add('selected')
      // btn.classList.remove('selected')
      // btn.classList.remove('selected')
    }
}

user_rock.addEventListener('click', () => {

  if(user_rock.classList.contains('selected')){
    user_rock.classList.remove('selected')

  }else{
    user_rock.classList.add('selected')
    user_paper.classList.remove('selected')
    user_siccor.classList.remove('selected')
    selectForComputer()
  }
})

user_paper.addEventListener('click', () => {

 let classes = user_paper.getAttribute('class')
console.log(classes);
  if(classes.split(" ").includes('selected')){
    user_paper.classList.remove('selected')
  }else{
    user_rock.classList.remove('selected')
    user_paper.classList.add('selected')
    user_siccor.classList.remove('selected')
    selectForComputer()
  }
})

user_siccor.addEventListener('click', () => {

  if(user_siccor.classList.contains('selected')){
    user_siccor.classList.remove('selected')
  }else{
    user_siccor.classList.add('selected')
    user_rock.classList.remove('selected')
    user_paper.classList.remove('selected')
    selectForComputer()
  }
})


