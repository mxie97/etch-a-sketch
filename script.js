const gridContainer = document.getElementById('grid-container')
const gridSlider = document.getElementById('change-grid')
const resetButton = document.getElementById('reset-button')
const colorButtons = document.querySelectorAll('.color-choice')
let color = 'black';
let gridUnits;

function populateGrid(squaresPerSide) {
    for (let i=0; i<squaresPerSide*squaresPerSide; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add('grid-unit');
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

function activateColor() {
    switch (color) {
        case 'black':
            this.style.backgroundColor = 'black';
            break;
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
    }
    // this.style.backgroundColor = 'gray';
}

function deactivateAllColor() {
    gridUnits.forEach((item) => {
        item.style.backgroundColor = 'white';
    });
}

function changeColor(e) {
    color = e.target.dataset.color;
}

// populate grid initially
changeGridDensity(16);


// listen for grid slider input and change grid density
gridSlider.oninput = function() {
    changeGridDensity(this.value);
}

// reset button
resetButton.addEventListener('click', deactivateAllColor)

// color buttons
colorButtons.forEach((colorButton) => {
    colorButton.addEventListener('click', changeColor)
})
