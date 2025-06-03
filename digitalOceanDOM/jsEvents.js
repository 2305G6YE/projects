//Button 1
const changeText = () => {
    const p = document.querySelector('p'); 
    p.textContent = "I changed because of an inline event handler."
}

const changeSecondText = () => {
    const p = document.body.children[3];
    p.textContent = "I also changed, but because of an event handler property!"
}
//Button 2
const btn = document.querySelector('#btn2');
btn2.onclick = changeSecondText;

const alertText = () => {
    alert ('Will I alert?');
}

btn2.onclick = alertText;

//Button 3
const changeThirdText = () => {
    const p = document.body.children[5];
    p.textContent = "I also changed, but because of a event listener!"
}

    // Listeners allow multiple callbacks on the same element,
    //  but handlers only allow one, as per btn 2 example 
const btn3 = document.querySelector('#btn3')
btn3.addEventListener('click', changeThirdText);
btn3.addEventListener('click', alertText);
    //Can also do anonymous functions in listeners


 //Test the key and code properties
 document.addEventListener('keydown', event => {
    console.log('key: ' + event.key);
    console.log('code: ' + event.code);
 })   