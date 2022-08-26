const grid = document.querySelector('grid');
const div = document.createElement('squareDiv');
//div.setAttribute("background: black");
container.appendChild(div);


// create square divs
//create 16x16 grid of these divs
// add hover effect: color of grid changes when mouse hovers over them
// add button, asking for size of grid in the same space, max = 100, for a new sketch pad


//function gor creating grid of divs
function generateDivs(16) {
    var e = document.body;
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.className = "row";
    }
    for (let j = 1; j <= 16; j++) {
        let cell = document.createElement("div");
        cell.className = "gridsquare";
        row.appendChild(cell);
    }
    e.appendChild(row);
}
generateDivs(16);
document.getElementById("grid").innerText = e.innerHTML;