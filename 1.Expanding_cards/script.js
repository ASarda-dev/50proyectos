
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
//otra forma de hacerlo

/* panels.forEach(element =>{
    element.addEventListener('click',() =>{
        removeActiveClasses()
        element.classList.add('active')

    })
}) */