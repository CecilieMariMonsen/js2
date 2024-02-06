import { registerFormHandler } from "../js/handlers/auth/registerFromHandler.js";

/*./handlers/auth/registerFormHandler.js*/
function router() {
    const pathname = window.location.pathname;

    console.log(pathname);

    switch(pathname) {
        case "/":
        case "/index.html":
            registerFormHandler();
            break;
    }
    
}


router();