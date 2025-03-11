const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", foo);

function foo(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  const res = {
    email: email.trim(),
    password: password.trim(),
  };
  console.log(res);
  form.reset();
}
