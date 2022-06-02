

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const firstWindow = document.querySelector("#firstWindow");
const greeting = document.querySelector("#greeting");
const loginBtn = document.querySelector("#logout-box")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const BLOCK_STYLE = "block";
const NONE_STYLE = "none";

function onLoginSubmit(event) {
  event.preventDefault();
  firstWindow.style.display = NONE_STYLE;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Welcome ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLogoutSubmit(event){
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  firstWindow.style.display = BLOCK_STYLE;
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}
loginBtn.addEventListener("click",onLogoutSubmit)

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    firstWindow.style.display = BLOCK_STYLE;
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    paintGreetings(savedUsername);
    firstWindow.style.display = NONE_STYLE;
}
