
let body = document.body;

function turnOnLight() {
	body.classList.add("light");
	button.classList.add("buttonOn");
  console.log("Lights on!");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);