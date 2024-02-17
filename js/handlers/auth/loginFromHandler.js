
 import * as Storage from "../../helpers/storage/index.js";


export function loginFormHandler() {
  const form = document.querySelector("#loginForm");
  
  form.addEventListener("submit", handleLoginForm);
}

async function handleLoginForm(event) {
  event.preventDefault();
  const form = event.target;

  const formData = new FormData(form);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);
  console.log(data);

  const { token } = data;

  //const token = data.token

  Storage.save("token", token);
  location.href="/admin";
}