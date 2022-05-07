let board = document.querySelector("#seerpeople")
let next = document.querySelector("#next")
localStorage.forsee = 0;
for(let i = 0; i<localStorage.players; i++){
    let number = document.createElement("button")
    number.innerHTML = i+1;
    number.setAttribute("id", i+1)
    board.appendChild(number)
}

let first = document.getElementById("1");
first.className = "onpress"
const peoplelist = document.querySelectorAll("button")

for(let i = 0; i<peoplelist.length; i++){
    peoplelist[i].onclick = function(event){
        console.log(i+1)
        let activeevent = document.querySelector(".onpress");
        activeevent.classList.remove("onpress");
        localStorage.setItem("forsee",i+1)
        event.currentTarget.classList.add("onpress");
    }
}



// let next = document.querySelector("#next");
next.addEventListener("click", event=>{
    x = localStorage.getItem('forsee').toString();
    console.log(x)
    if(localStorage.getItem(x) == "true"){
        alert("他是好人")
    }else{
        alert("他是狼人")
    }
    location.href = "witch.html";
})