 
const container = document.querySelector(".container");
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
const div = document.querySelectorAll("div.rowClass, div.colClass");
function randomColor() {
    Math.floor(Math.random() * 255);
};

document.addEventListener("mousemove", function(e) {
    div.style.backgroundColor = "rgb(" + `${randomColor()}` +
    ", " + `${randomColor()}` + ", " + `${randomColor()}` + ")";
})