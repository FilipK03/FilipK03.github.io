let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let keys = []


canvas.width = 800
canvas.height = 600

class Box {
    constructor(x, y, w, h, color){
        this.x = x,
        this.y = y,
        this.w = w,
        this.h = h,

        this.color = color
    }
    Draw = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h, this.color,);
    }
}

player1 = new Box(10, 540, 50, 50, "red")
Ground = new Box(0, 590, 8000, 10, "green")
rock = new Box(700, 0, 100, 5000, "gray")

setInterval(gameLoop, 1)

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true
})
window.addEventListener("keyup", function(e){
    delete keys[e.keyCode]
})



function gameLoop() {
ctx.clearRect(0, 0, 800, 600,)
player1.Draw()
Ground.Draw()
rock.Draw()
move()
checkWalls()
}

function move(){
    if(player1.y >= 540) {
console.log("Ground");
    }

    if(player1.x >= 650) {
        console.log("Wall");
            }

if(keys[68]){
    if(player1.x < 650)
     { player1.x += 1; }
}
if(keys[65]){
    if(player1.x > 1)
     { player1.x -= 1; }
}

if(keys[87]){
    if(player1.y > 1)
     { player1.y -= 1; }
}
if(keys[83]){
    if(player1.y < 540)
     { player1.y += 1; }
}

}

function checkWalls(){

}