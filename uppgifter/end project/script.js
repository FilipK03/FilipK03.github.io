const click = document.querySelectorAll('button[id^=but]')

let H3Element = document.getElementById("h3");

let sum = 0;

click.forEach(btn => {
   btn.addEventListener('click', (e) => {
        buttonfunction();
   });
});


function buttonfunction() {

    sum++;
    H3Element.textContent = sum;
    }