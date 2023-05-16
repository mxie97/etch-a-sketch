const gridContainer = document.getElementById('grid-container')
const changeGridButton = document.getElementById('change-grid')

for (let i=0; i<16*16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('grid-unit');
    newDiv.setAttribute('id', `${i}`);
    gridContainer.appendChild(newDiv);
}

let gridUnits = document.querySelectorAll('.grid-unit');
gridUnits.forEach((item) => {
    item.addEventListener('mouseover', activateColor)
})

changeGridButton.addEventListener('click', changeGridDensity)

function promptSquaresPerSide() {
    let squaresPerSide = prompt("How many squares per side? Enter an integer between 16 and 100.");
    return squaresPerSide;
}

function clearGrid() {
    gridUnits.forEach((item) => {
        item.remove()
    });
}

function populateGrid(squaresPerSide) {
    for (let i=0; i<squaresPerSide*squaresPerSide; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add('grid-unit');
        newDiv.setAttribute('id', `${i}`);
        gridContainer.appendChild(newDiv);
    }    
}

function changeGridDensity() {
    let numSquares = promptSquaresPerSide();
    clearGrid();
    populateGrid(numSquares);
    gridUnits = document.querySelectorAll('.grid-unit');
    let flexPercent = (1/numSquares)*100;
    console.log(flexPercent);
    gridUnits.forEach((item) => {
        item.style.flexBasis = `${flexPercent}%`;
        item.addEventListener('mouseover', activateColor)
    });

}

function activateColor(e) {
    let activatedGridUnit = document.getElementById(e.target.id);
    activatedGridUnit.classList.add('hover');
}


