import { registerFormHandler } from "../js/handlers/auth/registerFromHandler.js";
import { loginFormHandler } from "../js/handlers/auth/loginFromHandler.js";
import { buildMenu } from "./ui/common/buildMenu.js";


function router() {
    const pathname = window.location.pathname;

    console.log(pathname);

    buildMenu(pathname);

    switch(pathname) {
        case "/":
        case "/index.html":
            registerFormHandler();
            break;

        case "/auth/login/":
        case "/auth/login/index.html":
            loginFormHandler();
            break;    
    }
    
}


router();