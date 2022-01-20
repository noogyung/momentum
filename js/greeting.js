const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const todos = document.getElementById("todos");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function deletUser(event){
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}

function onLoginSubmit(event){
    event.preventDefault(); // 기본 동작 정지
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `${username}`;
    greeting.classList.toggle(HIDDEN_CLASSNAME);
    todos.classList.toggle(HIDDEN_CLASSNAME);
    const button = document.createElement("button");
    button.innerText = "change";
    button.addEventListener("click", deletUser);
    greeting.appendChild(button);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    todos.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(saveUsername);
}


