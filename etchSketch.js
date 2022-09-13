//const grid = document.getElementsByClassName("grid");
//console.log(grid);
const div = document.createElement('squareDiv');
//div.setAttribute("background: black");

const reset = document.getElementById("reset")
let gridsize = 10;

const grid = document.querySelector(".grid");
let percentage = (100 / gridsize).toFixed(2) ;
console.log(percentage);
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
    //const grid = document.querySelector(".grid");
    //console.log(is_dom_element(grid));
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        
        //console.log(percentage);
        row.className = "row";
    
        for (let j = 1; j <= size; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.innerText = " ";
            //cell.setAttribute('style','background')
            cell.style.backgroundColor = "white";
            cell.style.width =  percentage.toString() + '%';
            
            //cell.style.height = percentage.toString() + '%';
          //  console.log(cell.style.width);
            row.appendChild(cell);
            };
        grid.appendChild(row);
        };
   
}

generateDivs(gridsize);
//document.getElementById("grid").innerText = e.innerHTML;

grid.addEventListener('mouseover', (event)=> event.target.style.backgroundColor = "blue");

reset.addEventListener('click', function(e) {
  e.target.style.backgroundColor = "white"
});

//reset.addEventListener('click', () => { alert("Hello World"), grid.style.backgroundColor = "white"});