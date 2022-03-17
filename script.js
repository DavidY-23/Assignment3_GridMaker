// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    let row = document.createElement("tr");
    let column = document.createElement("td")

    if (numRows > 0) {
        let gridLastEle = grid.lastElementChild
        let gridLast = gridLastEle.cloneNode(true)
        grid.appendChild(gridLast);
    
    }

    if (numRows == 0) {
        row.appendChild(column);
        grid.appendChild(row);    
        numRows += 1;
    }
}

// Add a column
function addC() {
    let column = document.createElement("td")
    let row = document.createElement("tr")
    const table = document.querySelector("table");

    for (let rows of table.rows) {
        rows.insertCell(-1)
        console.log("Apple")
    }

    if(table.rows.length === 0) {
        row.append(column)
        grid.appendChild(row);
    }

    //alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}