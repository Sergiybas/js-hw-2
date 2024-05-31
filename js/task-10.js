function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const control = document.querySelector("#controls");
const input = control.querySelector('input[type="number"]');
const buttonCreate = control.querySelector("button[data-create]");
const buttonDestroy = control.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");
buttonCreate.addEventListener("click", handlerInputValue);
buttonDestroy.addEventListener("click", destroyBoxes);
function handlerInputValue() {
  const amount = Number(input.value);
  handlerCreate(amount);
}
function handlerCreate(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = ` ${size}px`;
    div.style.height = `${size}px`;
    div.style.margin = "20px";
    size += 10;
    box.append(div);
  }
}
function destroyBoxes() {
  box.innerHTML = "";
}
