let card = document.getElementById("Card");
var audio = document.getElementById("audio");

let door = document.getElementById("door");
let door1 = document.getElementById("door1");

card.addEventListener("click", function () {
    card.style.display = "none";
    door.classList.toggle("active");
    door1.classList.toggle("active");
    if(audio.paused) {audio.load;audio.play();}
})

