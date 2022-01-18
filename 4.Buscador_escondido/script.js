const search = document.querySelector('.search')
const button = document.querySelector('.btn')
const input = document.querySelector('.input')

button.addEventListener('click' , () =>{
    search.classList.toggle('active') //toggle para cambiar la classe
   input.focus() //fija el foco en el elemento indicado
})

