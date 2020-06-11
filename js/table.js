

function startTable(color) {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            table[i][j] = 0
            cell = document.getElementById('c' + i + j)
            cell.style.background = color
            cell.innerHTML = ''
        }
    }
}

function printCell(x, y, color) {

    cell = document.getElementById('c' + x + y)
    cell.style.background = color

    if (player == 1){
        cell.innerHTML = '<img src="img/cat.png"></img>'
    } else {
        cell.innerHTML = '<img src="img/duck.png"></img>'
    }
}