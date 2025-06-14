function randomNum () {
    return Math.round(Math.random() * 255);
};

const main = document.querySelector(".main");
const color = document.querySelector("#color");
color.addEventListener('click',(e) => {
    main.style.backgroundColor = "rgb(" + randomNum() 
    + `,` + randomNum() + "," + randomNum() + ")";
});

// 2nd Segment
const output = document.querySelector("#output");
const input = document.querySelector("#liveText");
input.addEventListener('keypress', (e) => {
    output.textContent += `${e.key}`;
    if(`${e.key.length}` > 1) {
        return output.textContent = "";
    }
});
const clear = document.querySelector("#clear");
clear.addEventListener('click', (e) => {
    input.value = "";
    output.textContent = "";
})

// 3rd Segment
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("#number");
const reset = document.querySelector('#reset');
number.textContent = 0;
plus.addEventListener('click', function(e) {
    number.classList.remove('offline');
    number.textContent = parseInt(number.textContent) + 1;
});

minus.addEventListener('click', e => {
    number.classList.remove('offline');
    number.textContent = parseInt(number.textContent) - 1;
});

reset.addEventListener('click', e => {
   number.textContent = 0;
   number.classList.add('offline'); 
});
