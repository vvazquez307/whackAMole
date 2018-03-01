let score = 0;

const holes = [...document.getElementsByClassName("hole")];

setInterval(() => {
  const selectedHole = Math.round(Math.random() * (holes.length - 1));
  holes[selectedHole].classList.toggle("mole");
}, 300)

document.getElementById("whack-a-mole").addEventListener("click", (event) => {
  if(event.target.matches(".mole")) {
    event.target.classList.remove("mole");
    score++;
  }
  document.getElementById("score").textContent = score;
})