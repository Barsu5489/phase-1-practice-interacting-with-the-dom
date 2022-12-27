

let h1 = document.getElementById('counter')
let ispaused = false
h1.textContent = 0
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const likes = document.querySelector('.likes')
const heart = document.getElementById('heart')
let pause = document.getElementById('pause')
const form = document.getElementById('comment-form')
const list = document.getElementById('list')
function timeDisp(){
    if(!ispaused){
    h1.textContent++
    }
}


minus.addEventListener('click',()=>{
    h1.textContent --
})

plus.addEventListener('click',()=>{
    h1.textContent ++
})


heart.addEventListener('click',()=>{
const li =document.createElement('li')
li.textContent = `You Liked number ${h1.textContent}`
likes.appendChild(li)
})

    
    pause.addEventListener('click',(e)=>{
      e.preventDefault()
        if(pause.textContent  === 'pause'){
            ispaused = true
        pause.textContent = 'Resume'

        
        heart.style.pointerEvents = 'none'
        minus.style.pointerEvents = 'none'
        plus.style.pointerEvents = 'none'
        form.style.pointerEvents = 'none'
        
        
        } else if(pause.textContent === 'Resume'){
            ispaused = false
                pause.textContent = 'pause'
                heart.style.pointerEvents = 'auto'
                minus.style.pointerEvents = 'auto'
                plus.style.pointerEvents = 'auto'
                form.style.pointerEvents = 'auto'
                
            
                
               
            
        }
        
    })

   
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