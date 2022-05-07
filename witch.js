let died = document.querySelector("#died");
died.innerHTML = localStorage.getItem("killed")
localStorage.witchkilled = 0;

let save = document.querySelector("#save");
save.addEventListener("click",event=>{
    localStorage.killed = 0;
    location.href = "result.html"
})

let kill = document.querySelector("#kill");
let witchkill = document.querySelector("#witchkill")
kill.addEventListener("click",event=>{
    localStorage.witchkilled = witchkill.value;
    location.href = "result.html"
})

let next = document.querySelector("#next");
next.addEventListener("click", event=>{
    location.href = "result.html";
})