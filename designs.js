// Select color input
const colorPicker = document.getElementById("colorPicker");
// Select size input--> The only way I got this to work was by 
// putting it in the makeGrid function below.

// When size is submitted by the user, call makeGrid()
function clickSubmit() {
    event.preventDefault(); // took me a  while to figure this one out!
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

// Your code goes here!
function makeGrid(height, width) {
    // initial setup
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    // nested loops for i=rows and j=cells/columns to build grid
    for (let n = 0; n < height; n++) {
        grid += '<tr class="row-' + n + '">';
        for (let m = 0; m < width; m++) {
            grid += '<td class="cell" id="row-' + n + '_cell-' + m + '"></td>';
        }
        grid += '</tr>';
    }
    // adds the grid to the table element
    table.innerHTML = grid;
    // call the function to make all the cells clickable/listen for clicks
    listenForCellClick();
}

// this fuction listens for any cell to be clicked, then fills in with color.
function listenForCellClick() {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}

// when user clicks "Submit" for the form "sizePicker" (from HTML), start the functions
document.getElementById('sizePicker').onsubmit = function () {
    clickSubmit();
};
