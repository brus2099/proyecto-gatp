function clearClock() {
    clearInterval(cronometer)
}

function startClock() {
    seconds = 0 
    cronometer = setInterval(function() {
        seconds++
        segs = seconds
    }, 1000);
}