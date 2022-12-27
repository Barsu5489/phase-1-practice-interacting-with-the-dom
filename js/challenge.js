

let h1 = document.getElementById('counter')
h1.textContent = 0

function timeDisp(){
    h1.textContent++
}

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(timeDisp,1000)
})