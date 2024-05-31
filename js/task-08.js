// const form = document.querySelector(".login-form");
// form.addEventListener("submit", handlerSubmit);
// function handlerSubmit(evt) {
//   evt.preventDefault();
//   const { email, password } = evt.currentTarget.elements;
//   if (!email.value || !password.value) {
//     alert("Усі поля повинні бути заповненні");
//     return;
//   }
//   const arrDate = {
//     email: email.value,
//     password: password.value,
//   };
//   console.log(arrDate);

//   form.reset();
// }

const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerSubmit);
function handlerSubmit(evt) {
  const { email, password } = evt.currentTarget.elements;
  if (!email.value || !password.value) {
    alert("Усі поля повинні бути заповненні");
    return;
  }
  evt.preventDefault();
  const formDate = new FormData(evt.currentTarget);
  const date = {};
  formDate.forEach((value, key) => {
    date[key] = value;
  });
  console.log(date);
  form.reset();
}
