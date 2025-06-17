 
let container = document.querySelector(".container");
//Creates rows
function makeGrid(rowNum,colNum) {
    for (let i = 0; i < rowNum; i++) {  
        var row = document.createElement("div");
        row.className = "rowClass";
        container.appendChild(row);
        for (let c = 0; c < colNum; c++) {
            var col = document.createElement("div");
            col.className = "colClass";
            row.appendChild(col);
        }
    }
}

makeGrid(16, 16);

container.style.display = 'flex';
container.style.flexDirection = 'column';

//Hover Effect
function hoverColor() { 
const div = document.querySelectorAll(".colClass");
const arrayedDiv = Array.from(div);

function randomColor() {
    return Math.floor(Math.random() * 255);
};
for (const arrayPart of arrayedDiv) {
    arrayPart.dataset.opacity = "0";
    arrayPart.addEventListener("mouseenter", function(e) {
        arrayPart.style.backgroundColor = `rgb(${randomColor()}, 
        ${randomColor()}, ${randomColor()})`;
        arrayPart.classList.remove("transitionOn");
    });
    arrayPart.addEventListener("mouseleave", function (e) {
        let opacity = parseFloat(arrayPart.dataset.opacity);
        if (opacity < 1) {
            opacity += 0.1;
            arrayPart.dataset.opacity = opacity.toFixed(2);
        }
        arrayPart.style.backgroundColor = `rgba(0,0,0,${opacity})`;
        // arrayPart.style.backgroundColor = "white";
        arrayPart.classList.add('transitionOn');
    });
}
};
hoverColor();

const button = document.querySelector("#resize");
function promptVertical() {
    const newRow = parseInt(prompt("Row Amount? (Vertical)(Max: 100)"));
    if (newRow > 100 || newRow < 1)
    {
        return promptVertical();
    }
    return newRow;
};

function promptHorizon () {
     const newCol = parseInt(prompt("Column Amount? (Horizontal)(Max: 100)"));
     if (newCol > newCol || newCol < 1)
    {
        return promptHorizon();
    }
    return newCol;
};

function newContainer () {
let newContainer = document.createElement("div");
    newContainer.classList = "container";
    document.body.appendChild(newContainer);
    return newContainer;
};

button.addEventListener("click", function (e) {
    let finalRow = promptVertical();
    let finalCol = promptHorizon();
    container.remove();
    container = newContainer();
    makeGrid(finalRow, finalCol);
    hoverColor();
})