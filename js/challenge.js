

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

    const form = document.getElementById('comment-form')
    const list = document.getElementById('list')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const comment = e.target.comment.value
        if(comment.length >0){
            console.log(comment)
            const p = document.createElement('p')
            p.textContent = comment
            list.appendChild(p)

        }
       
    })


document.addEventListener('DOMContentLoaded',()=>{
    setInterval(timeDisp,1000)
})