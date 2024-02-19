
 import * as storage from "../../helpers/storage/index.js";

 console.log(storage.load("token"));

export function loginFormHandler() {
  const form = document.querySelector("#loginForm");
  
  form.addEventListener("submit", handleLoginForm);
}

async function handleLoginForm(event) {
  event.preventDefault();
  console.log(event)


  const form = event.target;

  const formData = new FormData(form);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);
  
  console.log(data);

  const { token } = data;

  storage.save("token", token);


  console.log(token)

  //const token = data.token

  //storage.save("token", token);
  //location.href="/posts";
}