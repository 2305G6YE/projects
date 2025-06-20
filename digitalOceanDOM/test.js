document.addEventListener('keydown', event => {
    var element = document.querySelector('p');

    //Set variables for keydown codes
    var a = 'KeyA';
    var s = 'KeyS';
    var d = 'KeyD';
    var w = 'KeyW';

    //Set a direction for each code
    switch (event.code) {
        case a:
            element.textContent = 'Left';
            break;
        case s:
            element.textContent = 'Down';
            break;
        case d:
            element.textContent = 'Right';
            break;
        case w:
            element.textContent = 'Up';
            break;
    }
})

// Target : locating based on click location,and not on keys
const section = document.querySelector('section');

    //Print the selected target,
section.addEventListener('click', event => {
    console.log(event.target);
})

