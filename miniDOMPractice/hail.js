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
input.addEventListener('keydown', (e) => {
    output.textContent = "Text" + `${e.key}`;
});