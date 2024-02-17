import { logInURL } from "../../constants/api.js";

export async function register(userDetails) {
    
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(userDetails),
    };
    
    
    const response = await fetch(logInURL, options);
    const json = await response.json();

    console.log(response);

    if(response.ok){
        return json;
    }

    throw new Error(json.errors[0].message);
}
