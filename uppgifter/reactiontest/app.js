const containerElement = document.getElementById('container');
const buttonElement = document.getElementById('button');
const scoreElement = document.getElementById('score');

let startTime = null;

let isGameOver = false;

document.body.style.background = 'red';
containerElement.style.display = 'none';

const delay = 3000 + 4000 * Math.random();
let timeoutHandle = setTimeout(onTimeout, delay);

window.addEventListener('pointerdown', onWindowClicked);

function onTimeout() {
  document.body.style.background = 'lime';
  startTime = new Date();
}
function onWindowClicked() {
    if(startTime == null) {
      clearTimeout(timeoutHandle);
      const delay = 3000 + 4000 * Math.random();
      timeoutHandle = setTimeout(onTimeout, delay);

    }
    else if(isGameOver == false) {
      isGameOver = true;
  
      const endTime = new Date();
      const deltaTime = endTime.getTime() - startTime.getTime();
      
      scoreElement.innerHTML = deltaTime + ' ms';

      buttonElement.style = "display: block";

      containerElement.style.display = null;
    }
  }

  buttonElement.addEventListener("click",buttonfunction);

  function buttonfunction() {

      location.reload()

  }