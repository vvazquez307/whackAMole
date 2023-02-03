let score = 0;

const holes = document.getElementsByClassName("hole");
console.log("holes")
setInterval(function() {
    const randomHoleIndex = Math.floor(Math.random() * holes.length);
    holes[randomHoleIndex].classList.toggle("mole");
}, 250);

const number = document.getElementById('score')

const gameArea = document.getElementById("whack-a-mole");
gameArea.addEventListener('click', function(clickEvent) {
    if (clickEvent.target.matches(' .mole')){
        clickEvent.target.classList.remove('mole');
        number.innerText++
    }
});
