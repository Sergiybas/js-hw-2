function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const text = document.querySelector(".color");
const bodyColor = document.body;
button.addEventListener("click", handlerClick);
function handlerClick() {
  const colorRandom = getRandomHexColor();
  return  bodyColor.style.backgroundColor = colorRandom,
  text.textContent = colorRandom;

}
getRandomHexColor();