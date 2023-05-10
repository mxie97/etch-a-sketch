const gridContainer = document.getElementById('grid-container')

for (let i=0; i<16*16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('grid-unit');
    newDiv.setAttribute('id', `${i}`);
    gridContainer.appendChild(newDiv);
}




const gridUnit = document.querySelectorAll('.grid-unit');

function activateColor(e) {
    let activatedGridUnit = document.getElementById(e.target.id);
    activatedGridUnit.classList.add('hover');
}

gridUnit.forEach((item) => {
    item.addEventListener('mouseover', activateColor)
})
// gridUnit[i].addEventListener('mouseover', gridUnit[i].classList.add('hover'));




