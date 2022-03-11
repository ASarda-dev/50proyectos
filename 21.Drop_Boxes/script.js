const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
}

function dragStart(){

this.className += 'hold'
setTimeout(()=> this.className = 'invisible', 0)
    

}
function dragEnd(){
   this.className 
}
function dragOver(){
    console.log('drag Over')
}
function dragEnter(){
    console.log('drag Enter')
}
function dragLeave(){
    console.log('drag Leave')
}
function dragDrop(){
    console.log('drag Drop')
}