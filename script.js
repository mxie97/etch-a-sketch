const gridContainer = document.getElementById('grid-container')

for (let i=0; i<16*16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('grid-unit');
    gridContainer.appendChild(newDiv) 
}
