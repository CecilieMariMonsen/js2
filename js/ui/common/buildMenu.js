import { isLoggedIn } from "../handlers/helpers/auth/isLogin.js";

export function buildMenu() {
 const menu = document.querySelector("#menu");

 if (isLoggedIn()) {
    menu.innerHTML = `
    <li class="nav-item active">
    <a class="nav-link" href="#">Home</a>
  </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true"><button>Log Out</button></a>
                </li>
                  `; 

 } else {
    menu.innerHTML = `
                

        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/auth/login/index.html">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/auth/register/index.html">Register</a>
        </li>
                  `;

 }
    
}