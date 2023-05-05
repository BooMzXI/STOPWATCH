let seconds = 00;
let tens = 00;
let appendSeconds = document.getElementById('seconds')
let appendTens = document.getElementById('tens')
let btnStart = document.getElementById('btn-start')
let btnStop = document.getElementById('btn-stop')
let btnReset = document.getElementById('btn-reset')
let Interval;

btnStart.addEventListener('click', () => {
    clearInterval(Interval)
    Interval = setInterval(() => {
        tens++;
        if (tens < 9) {
            appendTens.innerHTML = '0' + tens;
        }
        else appendTens.innerHTML = tens;

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = '0' + seconds
            tens = 0;
            appendTens.innerHTML = '0' + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }, 10);
})

btnStop.addEventListener('click', () => {
    clearInterval(Interval)
})

btnReset.addEventListener('click', () => {
    clearInterval(Interval)
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
})