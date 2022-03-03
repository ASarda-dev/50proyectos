const smallcups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentatge = document.getElementById('percentatge')
const remained = document.getElementById('remained')

updateBigCup()

smallcups.forEach((cup,idx)=>{
    cup.addEventListener('click', () => highlightcups(idx))
})

function highlightcups(idx){
        if(smallcups[idx].classList.contains('full') && !smallcups
        [idx].nextElementSibling.classList.contains('full')){
            idx--
        }

    smallcups.forEach((cup, idx2)=>{
        if(idx2 <=idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
updateBigCup()
}

function updateBigCup(){ //llenar big cup en relacion las cup-small
    const fullCups = document.querySelectorAll('.cup-small.full').length

    const totalCups = smallcups.length

    if(fullCups === 0) {
        percentatge.style.visibility = 'hidden'
        percentatge.style.height = 0
    } else {
        percentatge.style.visibility = 'visible'
        percentatge.style.height = `${fullCups / totalCups * 330}px`
        percentatge.innerText=`${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2 -(250 * fullCups / 1000)}L`
    }

}