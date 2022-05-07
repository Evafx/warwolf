let board = document.querySelector("#wolf")
for(let i = 0; i<localStorage.players; i++){
    let number = document.createElement("button")
    number.innerHTML = i+1;
    number.setAttribute("onclick", "myFunction(this.id)");
    number.setAttribute("id", i+1)
    number.setAttribute("class", "box")
    board.appendChild(number)
}

function myFunction(clicked_id) {
    let pressed = document.getElementById(clicked_id);
    console.log(localStorage.getItem(pressed.innerHTML))
    if(localStorage.getItem(pressed.innerHTML) == "true"){
        console.log("onpress")
        pressed.className = "onpress"
        console.log(localStorage.getItem(pressed.innerHTML))
        // localStorage.setItem(pressed.innerHTMl,false)
        x = pressed.innerHTML.toString();
        localStorage.setItem(x,false)
        console.log(localStorage.getItem(pressed.innerHTML))
    }else{
        console.log("box")
        pressed.className = "box"
        localStorage.setItem(pressed.innerHTML,true)
    }
}

let next = document.querySelector("#next");
next.addEventListener("click", event=>{
    location.href = "kill.html";
})

