import { registerUrl } from "../../constants/api.js";

export async function register(userDetails) {
    
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(userDetails),
    };
    
    
    const response = await fetch(registerUrl, options);
    const json = await response.json();

    console.log(response);

    if(response.ok){
        return json;
    }

    throw new Error("oh no it was an error");
}


/*const form = document.querySelector("#formRegister");

form.addEventListener("submit", (event) => {
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries())
    console.log(profile)  ../../constants/api.js
})*/