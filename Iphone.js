let inter = document.getElementById("inter")
let container = document.getElementById("container")
let lastcontainer = document.getElementById("lastcontainer")
let career = document.getElementById("career")
let captain = document.getElementById("captain")
let btn2 = document.getElementById("btn2")
let dates = document.getElementById("dates")
let btns = document.getElementById("btns")
// 
container.style.backgroundImage = " URL('ynd3as3qqxt01.webp')"
career.style.display = "none"
captain.style.display = "none"
btns.style.display = "none"
btn2.style.display = "none"


let disp = true

setInterval(timer, 1000)
function timer() {
    let date = new Date()
    dates.innerHTML = `${date.toDateString()}`
    inter.innerHTML = `${date.getHours()}:${date.getMinutes()}`
}

function powerbtn() {
    console.log(disp);
    if (disp == true) {
        container.style.backgroundImage = "URL('iPhone-13-Blue-Dark-iphone-8.jpg')"
        career.style.display ="block"
        captain.style.display = "block"
        btn2.style.display = "block"
        disp = false
    } else {
        container.style.backgroundImage = " URL('ynd3as3qqxt01.webp')"
        career.style.display = "none"
        captain.style.display = "none"
        btns.style.display = "none"
        btn2.style.display ="none"
        disp = true
    }
}



function passwordbtn() {
    career.style.display ="none"
    btns.style.display ="block"

}
let active = document.getElementById("active")
let Passcode = document.getElementById("Passcode")
localStorage.setItem('password', 898910)
const appendNumber = (number)=>{
    active.value += number;
    if (active.value.length == 6) {
        console.log(active.value.length);

    if (active.value ==localStorage.getItem(("password"))) {
        btns.style.display = "none"
    }
    else{
        Passcode.innerHTML = "try again"
        active.value = ""
    }
    }
    
}


function cancel() {
    btns.style.display = "none"
    career.style.display = "block"
    active.value = ""
}



