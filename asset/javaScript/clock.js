let sec = document.getElementById('seconds');
let counter = document.querySelector('.counter')
let seconds = 10;
let Interval;
let lose = true
function start() {
    clearInterval(Interval);
    counter.style.display = "block"
    Interval = setInterval(startTimer, 1000);
}

function stop() {
    clearInterval(Interval);
}

function reset() {
    clearInterval(Interval);
    sec.innerHTML = '00';
    seconds = 10;
}

function startTimer() {
    seconds--;
    sec.innerHTML = seconds.toString().padStart(2, '0')
    if (seconds == 0) {
        stop()
        reset()
        counter.style.display = "none"
        if (lose) {
            toastSweet('error', 'زمان شما تمام شد', '#ffc0cb')
        }
        lose = false
    }
}
