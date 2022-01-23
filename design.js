const btn = document.querySelectorAll('.btn-design');
const formDiv = document.querySelector('.form-div')
const xBtn = document.querySelector('.exit')


for(let i = 0; i < btn.length; i++) {
   const display =  function (e) {
    formDiv.style.display = "block";
  }
  btn[i].addEventListener('click', display)
}



const exit = function () {
  formDiv.style.display = "none"
}
xBtn.addEventListener('click', exit)

