const changeText = () => {
    const p = document.querySelector('p'); 
    p.textContent = "I changed because of an inline event handler."
}

const changeSecondText = () => {
    const p = document.body.children[3];
    p.textContent = "I also changed, but because of an event handler property!"
}

const btn = document.querySelector('#btn2');
btn2.onclick = changeSecondText;

const alertText = () => {
    alert ('Will I alert?');
}

btn2.onclick = alertText;