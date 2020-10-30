const second = document.querySelector('#second')
const minute = document.querySelector('#minute')
const hour = document.querySelector('#hour')

let i = 0
setInterval(()=>{
    i += 6
    second.style.transform = `rotate(${i}deg)`
},1000)
setInterval(()=>{
    minute.style.transform = `rotate(${i}deg)`
},1000 * 60)
setInterval(()=>{
    hour.style.transform = `rotate(${i}deg)`
}, 1000 * 60 * 60)