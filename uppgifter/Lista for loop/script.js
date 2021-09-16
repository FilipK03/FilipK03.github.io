const todos = ['Gå till skolan', 'Programmera', 'Köpa mat!'];

let inputElement = document.getElementById("input");

todos.push(inputElement.value);

const list = document.getElementById("list");

let buttonElement1 = document.getElementById("button1");


buttonElement1.addEventListener("click", run);

function run() {

    
for (let i = 0; i < todos.length; i++) {
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