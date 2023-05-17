const gridContainer = document.getElementById('grid-container')
const gridSlider = document.getElementById('change-grid')
const resetButton = document.getElementById('reset-button')
const rainbowButton = document.getElementById('rainbow-button')
let gridUnits;

function populateGrid(squaresPerSide) {
    for (let i=0; i<squaresPerSide*squaresPerSide; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add('grid-unit');
        newDiv.setAttribute('id', `${i}`);
        gridContainer.appendChild(newDiv);
    }    
}

function clearGrid() {
    if (gridUnits) {
        gridUnits.forEach((item) => {
            item.remove()
        });
    } else return;
}
    
function changeGridDensity(squaresPerSide) {

    clearGrid();
    populateGrid(squaresPerSide);
    gridUnits = document.querySelectorAll('.grid-unit');
    let flexPercent = (1/squaresPerSide)*100;
    gridUnits.forEach((item) => {
        item.style.flexBasis = `${flexPercent}%`;
        item.addEventListener('mouseover', activateColor)
    });

}

function activateColor(e) {
    let activatedGridUnit = document.getElementById(e.target.id);
    activatedGridUnit.classList.add('hover');
}

function deactivateAllColor() {
    gridUnits.forEach((item) => {
        item.classList.remove('hover');
    });
}

// populate grid initially
changeGridDensity(16);


// listen for grid slider input and change grid density
gridSlider.oninput = function() {
    changeGridDensity(this.value);
}

resetButton.addEventListener('click', deactivateAllColor)