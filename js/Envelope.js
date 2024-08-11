let clickMusic = document.querySelector(".clickMusic");
let heart = document.querySelector(".heart");
let baby = document.querySelector(".baby");
let card = document.getElementById("card");
let lid = document.getElementById("lid");
var audio = document.getElementById("audio");
const text = document.querySelector('.messagetxt');
const txt  =["亲爱的小乖乖，今天是2024年8月20日，是师父和芮芮在一起的第2922天，我们已经一起走过了八个年头，接下来将是属于我们崭新的一年！还记得我们初识的初三暑假，还记得我们曾许下认真的约定，要一直一直在一起，我们期待早点过完高中三年，我们期待早点过完大学四年，如今都过去了呀！未来已经不久啦，我们终于可以🍭真真正正的生活在一起了，期待那一天的到来呐！"]; 
var index=0;

heart.addEventListener("click", function () {
    lid.classList.toggle("active");
    heart.style.display = "none";
    setInterval(function() {text.innerHTML = txt[0].slice(0,++index);},200)
    setTimeout(function () {clickMusic.play();}, 200);
    if(audio.paused) {audio.load;audio.play();}
    card.classList.toggle("active");
})

baby.addEventListener("click", function () {
    setTimeout(function () {location.href = "Card.html";}, 200);
})