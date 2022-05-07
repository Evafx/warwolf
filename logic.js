let playernumber = document.querySelector("#playernumber")
localStorage.clear();
let start = document.querySelector("#start")
start.addEventListener("click", event=>{
    localStorage.clear();
    localStorage.players = playernumber.value;
    for(let i=0; i<playernumber.value; i++){
        x = (i+1).toString()
        localStorage.setItem(x,true);
    }
    location.href = "wolf.html"
})