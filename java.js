let board = document.getElementById('board')
let divs = 500;
let colors = ['MediumAquamarine', 'Maroon', 'Purple', 'DarkSlateGray', 'Navy', 'Gold', 'ForestGreen', 'ForestGreen', 'MediumVioletRed']
for (let i = 0; i < divs; i++) {
    let div  = document.createElement('div')
    div.classList.add('square')

    div.addEventListener('mouseover', () => setColor(div))
    div.addEventListener('mouseleave', () => removeColor(div))

    board.append(div)
}

function setColor(el) {
    let color = getColor()
    el.style.backgroundColor = color
}
function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d'
}
function getColor() {
    let index = Math.floor(Math.random() * colors.length)

    return colors[index]
}