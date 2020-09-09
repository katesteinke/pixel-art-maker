// Select color input
var color = document.getElementById('colorPicker');
// Select size input
var sizeForm = document.getElementById('sizePicker');
var canvasTable = document.getElementById('pixelCanvas');

// Your code goes here!
function makeGrid(height, width) {
    // Start with an empty canvas 
    canvasTable.innerHTML = '';
    // console.log("emptyCanvas");
    for (var m = 0; m < height; m++) {
        var rows = canvasTable.insertRow(m);
        // console.log("m=" + m + " of " + height);
        for (var n = 0; n < width; n++) {
            var cells = rows.insertCell(n);
            // console.log("n=" + n);
            canvasTable.addEventListener("click", function(event) {
                event.target.style.backgroundColor = color.value;
            })
        }
    }
}

// When size is submitted by the user, call makeGrid()
sizeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    // console.log("calling makeGrid with " + height + " x " + width);
    makeGrid(height, width);    
})



