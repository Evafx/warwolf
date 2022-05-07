let board = document.querySelector("#people")
let next = document.querySelector("#next")
localStorage.killed = 0;
for(let i = 0; i<localStorage.players; i++){
    let number = document.createElement("button")
    number.innerHTML = i+1;
    // number.setAttribute("onclick", "myFunction(this.id)");
    number.setAttribute("id", i+1)
    board.appendChild(number)
}

// function myFunction(clicked_id) {
//     let pressed = document.getElementById(clicked_id);
//     console.log(localStorage.getItem('killed'))
//     if(localStorage.getItem("killed") == 0){
//         console.log("onpress")
//         pressed.className = "onpress"
//         localStorage.setItem("killed",pressed.innerHTML)
//     }else{
//         console.log("box")
//         pressed.className = "box"
//         localStorage.setItem("killed",0)
//     }
// }
let first = document.getElementById("1");
first.className = "onpress"
const peoplelist = document.querySelectorAll("button")

for(let i = 0; i<peoplelist.length; i++){
    peoplelist[i].onclick = function(event){
        console.log(i+1)
        let activeevent = document.querySelector(".onpress");
        activeevent.classList.remove("onpress");
        localStorage.setItem("killed",i+1)
        event.currentTarget.classList.add("onpress");
    }
}



// let next = document.querySelector("#next");
next.addEventListener("click", event=>{

    location.href = "seer.html";
})