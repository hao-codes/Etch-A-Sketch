//const grid = document.getElementsByClassName("grid");
//console.log(grid);
const div = document.createElement('squareDiv');
//div.setAttribute("background: black");



// create square divs
//create 16x16 grid of these divs
// add hover effect: color of grid changes when mouse hovers over them
// add button, asking for size of grid in the same space, max = 100, for a new sketch pad


function is_dom_element(obj) {
    return !!(obj && obj.nodeType === 1);
  };



//function for creating grid of divs
function generateDivs(size) {
    //var body = document.body;
    const grid = document.querySelector(".grid");
    console.log(is_dom_element(grid));
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
    
        for (let j = 1; j <= size; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.innerText = "   ";
            row.appendChild(cell);
            };
        grid.appendChild(row);
        };
   
}

generateDivs(4);
//document.getElementById("grid").innerText = e.innerHTML;