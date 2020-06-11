function check(x, y, player) {

    if (table[0][0] == player && table[0][1] == player && table[0][2] == player) win = player
    if (table[1][0] == player && table[1][1] == player && table[1][2] == player) win = player
    if (table[2][0] == player && table[2][1] == player && table[2][2] == player) win = player
    if (table[0][0] == player && table[1][0] == player && table[2][0] == player) win = player
    if (table[0][1] == player && table[1][1] == player && table[2][1] == player) win = player
    if (table[0][2] == player && table[1][2] == player && table[2][2] == player) win = player
    if (table[0][0] == player && table[1][1] == player && table[2][2] == player) win = player
    if (table[0][2] == player && table[0][1] == player && table[2][0] == player) win = player

    if (win == 1) {
        //alert('Player 1 wins')
        message(win)
        end = true
    } else if (win == 2) {
        //alert('Player 2 wins')
        message(win)
        end = true
    } else if (pendingCell == 0) {
        end = true
        win = 0
        message(win)
    }
}
Message = document.getElementById('message')
textButtom = document.getElementById('button')
function message(win) {
    if (win!=0){
        messageText = 'El ganador es el jugador ' + win
        Message = document.getElementById('message')
        Message.style.display='block'
        Message.innerHTML = messageText
        text = 'Jugar de nuevo'
        textButtom = document.getElementById('button')
        textButtom.style.display = 'block'
        textButtom.innerHTML = text
    } else {
        messageText = 'Empate'
        Message = document.getElementById('message')
        Message.style.display='block'
        Message.innerHTML = messageText
        text = 'Jugar de nuevo'
        textButtom = document.getElementById('button')
        textButtom.style.display = 'block'
        textButtom.innerHTML = text
    }
}

function endMessage() {
    textMessage = 'Fin del juego'
    Message = document.getElementById("message")
    Message.style.display = 'block'
    Message.innerHTML = textMessage
    pause()
}

function cellMessage() {
    textMessage = 'Celda ocupada'
    Message = document.getElementById("message")
    Message.style.display = 'block'
    Message.innerHTML = textMessage
    pause()
}

function pause() {
    second = 0
    time = setInterval(function() {
        while (second<2) {
            second++
        }
        if (second == 2) {
            Message.style.display = 'none'
        }
    }, 4000)
}