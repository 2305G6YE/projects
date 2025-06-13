 const container = document.querySelector(".container");
//Creates rows
function makeGrid(rowNum,colNum) {
    for (let i = 0; i < rowNum; i++) {  
        const row = document.createElement("div");
        row.className = "rowClass";
        container.appendChild(row);
        for (let c = 0; c < colNum; c++) {
            const col = document.createElement("div");
            col.className = "colClass";
            row.appendChild(col);
        }
    }
}
makeGrid(16, 16);
