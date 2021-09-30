
const div = document.createElement("div");


let bodyElement = document.getElementById("body");

 let buttonElement1 = document.getElementById("button1");





buttonElement1.addEventListener("click", add);

function add(){

body.append(div); //lägger till div till hemsidan

div.innerHTML = "<strong>Very Nice </strong>"; //kör html i javascript
div.style.color = "red";




//div.innerText = "Hej på dej";
//div.TextContent = "Hej på dej"; samma som innertext men skriver också ut spaces
    
    //body.append(bodyElement.style.background = " red" );
}

