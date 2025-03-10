const input = document.querySelector("#name-input");
console.log(input);
const span = document.querySelector("#name-output");

function hello(event) {
  const sayHello = event.target.value.trim();
  if (sayHello === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = sayHello;
  }
}

input.addEventListener("input", hello);
