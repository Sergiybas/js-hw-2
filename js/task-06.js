const input = document.querySelector("#validation-input");
input.addEventListener("blur", handlerInput);

function handlerInput(evt) {
  let value = evt.currentTarget.value.length;
  const dataLength = parseInt(input.getAttribute("data-length"));
  if (value === dataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
