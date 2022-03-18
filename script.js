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
        //numRows+= 1;
    
    }

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
    for (let rows of table.rows) {
        var insertion = rows.insertCell(-1)
        insertion.style.background = "white";
        for (let x = 0; x < rows.children.length; x++) {
            rows.children[x].onclick = function() {
                this.style.background = colorSelected;
            }
        }
    }

    if(numCols == 0 && numRows == 0) {
        console.log("Why")
        console.log("col", column);
        row.append(column)
        grid.appendChild(row);
        numRows += 1;
    }
    numCols += 1;


    //alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    let table = document.querySelector("table");
    document.getElementById("grid").deleteRow(-1);
    numRows--;
    if (numRows <= 0) {
        numRows = 0;
        numCols = 0
    }

    //alert("Clicked Remove Row"); // Replace this line with your code.
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
    console.log(table);
    numCols--;
    if (numCols <= 0) {
        numCols = 0;
        numRows = 0;
    }

    //alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    let grids = document.querySelectorAll("td");
}

// Fill all uncolored cells
function fillU(){
    const table = document.querySelector("table");

    for (let rows of table.rows) {
        for (let x = 0; x < rows.children.length; x++) {
            if (rows.children[x].style.background == "white" || rows.children[x].style.background == null) {
                rows.children[x].style.background = colorSelected;
            }
        }
    }
    //alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    const table = document.querySelector("table");

    for (let rows of table.rows) {
        for (let x = 0; x < rows.children.length; x++) {
            rows.children[x].style.background = colorSelected;
        }
    }
    //alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    const table = document.querySelector("table");

    for (let rows of table.rows) {
        for (let x = 0; x < rows.children.length; x++) {
            rows.children[x].style.background = "white";
        }
    }
    //alert("Clicked Clear All"); // Replace this line with your code.
}