// create square divs
// create 16x16 grid of these divs
// add hover effect: color of grid changes when mouse hovers over them
// add button, asking for size of grid in the same space, max = 100, for a new sketch pad


const div = document.createElement('squareDiv');
//div.setAttribute("background: black");

const clearButton = document.getElementById("clear")

const btn_size = document.getElementById("btn-sizing");
console.log(btn_size);

const grid = document.querySelector(".grid");

//btn_size.addEventListener("click", (event) => )

const gridsizeSubmit = document.querySelector(".gridsizeSubmit");
const guessField = document.querySelector('.gridsize');

const currentGridsize = document.getElementById("currentGridsize");
console.log(currentGridsize);

console.log(typeof gridsize === 'undefined');

if (typeof gridsize === 'undefined') {
  let gridsize = 10;
  generateDivs(gridsize);
  currentGridsize.innerHTML = gridsize.toString() + " x " + gridsize.toString();
}
//currentGridsize.innerHTML = gridsize.toString() + " x " + gridsize.toString();

function checkGridsize() {

  let gridsize = Number(guessField.value)

  console.log("Gridsize :" + gridsize.toString());


  if (Number.isInteger(gridsize) == false || gridsize > 100 || gridsize < 1) {
    alert("Invalid input, please enter a number between 1 and 100");
  } else {

    //console.log(percentage);
    grid.innerHTML = '';

    generateDivs(gridsize);
    currentGridsize.innerHTML = gridsize.toString() + " x " + gridsize.toString();
  }

};


// set gridsize and check if size is in [1, 100]
gridsizeSubmit.addEventListener('click', checkGridsize);


//function for creating grid of divs

function generateDivs(size) {

  let percentage = (100 / size).toFixed(2);
  //console.log(percentage);

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
      cell.style.width = percentage.toString() + '%';

      row.appendChild(cell);
    };
    grid.appendChild(row);
  };

}


grid.addEventListener('mouseover', (event) => event.target.style.backgroundColor = "#c1afb7");

// button for clearing grid back to white
clearButton.addEventListener('click', function onClick(event) {
  const cells = document.querySelectorAll(".cell");
  // console.log(cells);
  document.querySelectorAll(".grid")[0].style.backgroundColor = "white";
  for (let k = 0; k < cells.length; k++) {
    cells[k].style.backgroundColor = "white";
  };
});

function is_dom_element(obj) {
  return !!(obj && obj.nodeType === 1);
};