

let h1 = document.getElementById('counter')
let ispaused = false
h1.textContent = 0

function timeDisp(){
    if(!ispaused){
    h1.textContent++
    }
}
    let pause = document.getElementById('pause')
    pause.addEventListener('click',(e)=>{
      e.preventDefault()
        if(pause.textContent  === 'pause'){
            ispaused = true
        pause.textContent = 'Resume'
        } else if(pause.textContent === 'Resume'){
            ispaused = false
                pause.textContent = 'pause'
                
               
            
        }
        
    })


document.addEventListener('DOMContentLoaded',()=>{
    setInterval(timeDisp,1000)
})