let todos = ['Gå till skolan', 'Programmera', 'Köpa mat!'];

let inputElement = document.getElementById("input");



const list = document.getElementById("list");

let buttonElement1 = document.getElementById("button1");
let buttonElement2 = document.getElementById("button2")

buttonElement1.addEventListener("click", run);
buttonElement2.addEventListener("click", clear);


function clear() {
todos.splice(1);
}

function run() {
    todos.push(inputElement.value);
    
for (let i = todos.length - 1; i < todos.length; i++) {
    const li = document.createElement('li');
    li.textContent = todos[i];
    li.addEventListener("click", line);
    list.appendChild(li);
}
}



for (let i = 0; i < todos.length; i++) {
    const li = document.createElement('li');
    li.textContent = todos[i];
    li.addEventListener("click", line);
    list.appendChild(li);

function line(e) {
if(e.target.style.textDecoration) {
    e.target.style.textDecoration = null;
}
else {


    e.target.style.textDecoration = "line-through";
}
}

}