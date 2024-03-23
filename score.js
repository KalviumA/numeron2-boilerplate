// Iteration 8: Making scoreboard functional

document.getElementById("play-again-button").addEventListener("click",()=>{
    window.location.href="./game.html"
})


let total=localStorage.getItem("score")||null
document.getElementById("score-board").innerHTML=total;