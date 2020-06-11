var table = new Array(3)
var pendingCell = 9

var player = 1
var win = 0
var end = false
var color

function playAgain() {
    player=1
    win = 0
    end = null
    pendingCell = 9
    Message.style.display='none'
    textButtom.style.display='none'
    execute()
}

function selectCell(x, y, player) {
    
    table[x][y] = player
    printCell(x, y, 'blue', player)
    pendingCell--
    check(x, y, player)
    
}

function turnPlayer2() {
    player = 2
    x2 = Math.round(Math.random() * 2)
    y2 = Math.round(Math.random() * 2)
    while(table[x2][y2] == 1 || table[x2][y2] == 2) {
        x2 = Math.round(Math.random() * 2)
        y2 = Math.round(Math.random() * 2)
    }
    if(end) {
        endMessage()
    } else {
        selectCell(x2, y2, player)
    }
    player = 1
}

function checkCell(x, y) {

    if(table[x][y] == 1 || table[x][y] == 2){
        //alert('Filled')
        cellMessage()
    } else if(end){
        //alert('Endgame')
        endMessage()
    } else {
        player = 1
        selectCell(x, y, player)
        if (pendingCell>0) {
            player = 2
            turnPlayer2()
        }
    }
}

function execute() {
    for (i = 0; i < 3; i++) {
        table[i] = new Array(3)
    }
    color = "white"
    startTable(color)
}

execute()