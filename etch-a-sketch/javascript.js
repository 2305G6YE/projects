 const container = document.querySelector(".container");
//Creates rows
function makeRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {  
        const row = document.createElement("div");
        row.className = "rowClass"
        container.appendChild(row);
    }
}
makeRows(16);
