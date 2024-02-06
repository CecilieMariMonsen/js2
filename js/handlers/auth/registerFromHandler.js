/*import { register } from "../../api/auth/register.js";

export function registerFormHandler() {
  const form = document.querySelector("#formRegister");

    form.addEventListener("submit", handleRegisterForm );

    } 
 

async function handleRegisterForm(event) {
    event.preventDefault();
    console.log(event);

    const form = event.target;

    const formData = new FormData(form);
    const entries = formData.entries();
    const userDetails = Object.fromEntries(entries);
    console.log(userDetails);

   await register(userDetails)



    try{
        await register(userDetails)

    }catch(error){
        console.log(error)
    }

}*/

import { register } from "../../api/auth/register.js";

export function registerFormHandler() {
  const form = document.querySelector("#formRegister");
  form.addEventListener("submit", handleRegisterForm);
}

async function handleRegisterForm(event) {
  event.preventDefault();
  console.log(event);

  const form = event.target;
  const formData = new FormData(form);
  const entries = formData.entries();
  const userDetails = Object.fromEntries(entries);
  console.log(userDetails);

  try {
    await register(userDetails);
  } catch (error) {
    console.log(error);
  }
}
