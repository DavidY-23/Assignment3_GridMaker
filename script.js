// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    let row = document.createElement("tr");
    let column = document.createElement("td")
    let table = document.querySelector("table");
    column.style.background = "white";
    //Duplicates the previous <tr>, sets the color of all the cells to white, and gives functionality to change color on click
    if (numRows > 0 || numCols > 0) {
        let gridLastEle = grid.lastElementChild
        let gridLast = gridLastEle.cloneNode(true)
        for (let x = 0; x < gridLast.children.length; x++) {
            gridLast.children[x].style.background = "white";
            gridLast.children[x].onclick = function() {
                this.style.background = colorSelected;
            }
        }
        grid.appendChild(gridLast);    
    }
    //Initalizes our table. 
    if (numCols == 0 && numRows == 0) {
        row.appendChild(column);
        grid.appendChild(row);    
        numCols += 1;
    }
    numRows += 1;
}

// Add a column
function addC() {
    let column = document.createElement("td")
    let row = document.createElement("tr")
    let table = document.querySelector("table");
    let grid = document.getElementById("grid");
    column.style.background = "white";
    //Adds a <td> to each <tr>, sets the color to white, and gives the functionality to change color on click.
    for (let rows of table.rows) {
        var insertion = rows.insertCell(-1)
        insertion.style.background = "white";
        for (let x = 0; x < rows.children.length; x++) {
            rows.children[x].onclick = function() {
                this.style.background = colorSelected;
            }
        }
    }
    //Initalizes our table. 
    if(numCols == 0 && numRows == 0) {
        row.append(column)
        grid.appendChild(row);
        numRows += 1;
    }
    numCols += 1;
}

// Remove a row
function removeR() {
    let table = document.querySelector("table");
    document.getElementById("grid").deleteRow(-1);
    numRows--;
    //If we have no more rows, then grid is reset.
    if (numRows <= 0) {
        numRows = 0;
        numCols = 0
    }
}

// Remove a column
function removeC() {
    const table = document.querySelector("table");
    for (let rows of table.rows) {
        rows.deleteCell(-1)
        if (rows.childNodes.length == 0) {
            document.getElementById("grid").deleteRow(-1);
            document.getElementById("grid").deleteRow(-1);
        }
    }
    numCols--;
    //If we have no more columns, then grid is reset.
    if (numCols <= 0) {
        numCols = 0;
        numRows = 0;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    let grids = document.querySelectorAll("td");
}

// Fill all uncolored cells
function fillU(){
    const table = document.querySelector("table");
    //If any of the cells are white, then we change it to the color selected
    for (let rows of table.rows) {
        for (let x = 0; x < rows.children.length; x++) {
            if (rows.children[x].style.background == "white" || rows.children[x].style.background == null || rows.children[x].style.backgroundColor == "white") {
                rows.children[x].style.background = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    const table = document.querySelector("table");
    //Changes all the colors of cells to color selected
    for (let rows of table.rows) {
        for (let x = 0; x < rows.children.length; x++) {
            rows.children[x].style.background = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    const table = document.querySelector("table");
    //Changes all colors of cells to white
    for (let rows of table.rows) {
        for (let x = 0; x < rows.children.length; x++) {
            rows.children[x].style.background = "white";
        }
    }
}