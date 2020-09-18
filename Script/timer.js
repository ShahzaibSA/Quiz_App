let quizSeconds = document.getElementById("seconds");
let quizMinutes = document.getElementById("minutes");

// let sec = 0;
// let mins = 0;
// let interval;


// function timer() {
//     sec++
//     seconds.innerHTML =`: ${sec}`;
//     if(sec >= 10){
//         mins++
//         sec = 0
//         minutes.innerHTML = `${mins} `
//     }
// }

// interval = setInterval(timer, 1000)

let time = new Date(new Date().setTime(0));
let seconds = Math.floor((time % (100 * 60)) / 1000);
let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

let timex = 0;

setInterval(function () {
    if (seconds < 59) {
        seconds++;
    }
    else {
        minutes++;
        seconds = 0;
    }
    let formattedSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let formattedMin = minutes < 10 ? `0${minutes} :` : `${minutes}`;
    quizMinutes.innerHTML = formattedMin;
    quizSeconds.innerHTML = formattedSec;
}, 1000)
