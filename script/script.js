const showyDisplay = document.querySelector('.showy__display__display > p');
const showyButtons = document.querySelectorAll('.showy__display__buttons__button');
const copyWriteYear = document.getElementById('year');
const buttonSubmit = document.getElementById('button-submit');
const contactInputs = document.querySelectorAll('.contact > input');
const contactMessage = document.querySelector('.contact > textarea');
let showyDisplayValue = 0;


showyButtons.forEach((botao, indice)=>{
  botao.addEventListener('click', ()=>{
    indice === 0 ? showyDisplayValue += 1 : showyDisplayValue -= 1;
    showyDisplayValue <= 0 ? showyDisplayValue = 0 : '';
    showyDisplayValue >= 10 ? showyDisplayValue = 10 : '';
    showyDisplay.innerText = showyDisplayValue;
  }) 
})

buttonSubmit.addEventListener('click', ()=>{
  contactInputs.forEach((item)=>{
    item.value = '';
  })
  contactMessage.value = '';
  alert('Contato efetuado com sucesso!')
})

copyWriteYear.innerText = new Date().getFullYear();