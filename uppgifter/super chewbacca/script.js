const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;
let stop = 100;
let stop2 = false;
let map = "background.png";

const keys = [];

let player = {
x: 200,
y: 300,
width: 40,
height: 72,
frameX: 0,
frameY:  0,
speed: 9,
moving: false
};

const playerSprite = new Image();
playerSprite.src = "chewie.png";
const background = new Image();


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}




window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
    player.moving = true;
    });
    window.addEventListener("keyup", function(e){
        delete keys[e.keyCode];
        player.moving = false;
    });
    

function movePlayer() {

    if (keys[38] && player.y > stop){

        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (keys[37] && player.x > 0){

        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
    }
    if (keys[40] && player.y < canvas.height -player.height && stop2 == false){

        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
}
if (keys[39] && player.x < canvas.width - player.width){
    player.x += player.speed;
    player.frameY = 2;
    player.moving = true;
}
}


function handlePlayerFrame(){
if (player.frameX < 3 && player.moving) player.frameX++
else player.frameX = 0;
}
/*
function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)
    requestAnimationFrame(animate);
    handlePlayerFrame();
    movePlayer();
    }
    
    animate();
    */

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}

function backgroundChange() {
    background.src = map;
        if (player.x > canvas.width - player.width) map = "marioBackground.jpg";

        if (player.x > canvas.width - player.width) stop = 370;

        if (player.x > canvas.width - player.width) stop2 = true;

     if (player.x > canvas.width - player.width) player = {x: 5, y: 365,width: 40,height: 72,frameX: 0,frameY:  0,speed: 9,moving: false};
    }

    


function animate() {
requestAnimationFrame(animate);
now = Date.now();
elapsed = now - then;
if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    handlePlayerFrame();
    backgroundChange();
 }
}

startAnimating(20); 

