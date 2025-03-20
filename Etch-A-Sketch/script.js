const gridContainer = document.querySelector(".grid-container")
const body = document.querySelector("body")
const menu = document.querySelector(".menu")
const clearBtn = document.querySelector(".clear-btn")

let size = 16
const flexGrids = []
var gridContainerStyle = window.getComputedStyle(gridContainer)
var gridContainerWidth = parseFloat(gridContainerStyle.width)
function setSize(_size) {
    size = _size
}

for (let i = 0; i < size * size; i++) {
    const flexGrid = document.createElement('div')
    flexGrid.style.width = gridContainerWidth / size + "px"
    flexGrid.style.height = flexGrid.style.width
    flexGrid.addEventListener('click', () => {
        flexGrid.style.background = 'red'
    })

    gridContainer.appendChild(flexGrid)
    flexGrids.push(flexGrid)
}

clearBtn.addEventListener('click', () => {
    flexGrids.forEach(flexGrid => {
        flexGrid.style.background = 'white'
    });
})




