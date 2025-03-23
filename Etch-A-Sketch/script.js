const body = document.querySelector("body")
const colorSelector = document.querySelector(".color-selector")
const colorModeBtn = document.querySelector(".color-mode-btn")
const rainbowModeBtn = document.querySelector(".rainbow-mode-btn")
const eraserBtn = document.querySelector(".eraser-btn")
const clearBtn = document.querySelector(".clear-btn")
const sizeValue = document.querySelector(".size-value")
const sizeSlider = document.querySelector(".size-slider")
const gridContainer = document.querySelector(".grid-container")

DEFAULT_COLOR = '#333333'
DEFAULT_MODE = 'color'
DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

colorSelector.oninput = (e) => setCurrentColor(e.target.value)
colorModeBtn.onclick = () => setCurrentMode('color')
rainbowModeBtn.onclick = () => setCurrentMode('rainbow')
eraserBtn.onclick = () => setCurrentMode('eraser')
clearBtn.onclick = () => clearGrid()
sizeSlider.onmousemove = (e) => changeSize(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

let mouseDown = false
body.onmousedown = () => (mouseDown = true)
body.onmouseup = () => (mouseDown = false)

let flexGrids = []
var gridContainerStyle = window.getComputedStyle(gridContainer)
var gridContainerWidth = parseFloat(gridContainerStyle.width)
loadGrid()

function setCurrentColor(_color) {
    currentColor = _color
}

function setCurrentMode(_mode) {
    currentMode = _mode
}

function setCurrentSize(_size) {
    currentSize = _size
}

function changeSize(_size) {
    setCurrentSize(_size)
    sizeValue.innerHTML = `${_size} x ${_size}`
    loadGrid()
}

function clearGrid() {
    flexGrids.forEach(flexGrid => {
        flexGrid.style.backgroundColor = '#fefefe'
    });
}

function loadGrid() {
    for (let i = 0; i < currentSize * currentSize; i++) {
        const flexGrid = document.createElement('div')
        flexGrid.style.width = gridContainerWidth / currentSize + "px"
        flexGrid.style.height = flexGrid.style.width
        flexGrid.addEventListener('mouseover', changeColor)
        flexGrid.addEventListener('mousedown', changeColor)
        gridContainer.appendChild(flexGrid)
        flexGrids.push(flexGrid)
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe'
    }
}





