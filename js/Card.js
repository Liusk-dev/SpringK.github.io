let card = document.getElementById("Card");
var audio = document.getElementById("audio");

let door = document.getElementById("door");
let door1 = document.getElementById("door1");

let up = document.getElementById("up");
let down = document.getElementById("down");

card.addEventListener("click", function () {
    up.style.display = "none";
    down.style.display = "none";
    card.style.display = "none";
    door.classList.toggle("active");
    door1.classList.toggle("active");
    if(audio.paused) {audio.load;audio.play();}
})

