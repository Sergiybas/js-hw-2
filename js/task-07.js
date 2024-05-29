const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
input.addEventListener("input", handlerInput);
function handlerInput(evt) {
  let fontSize = evt.target.value;
  spanText.style.fontSize = `${fontSize}px`;
}
