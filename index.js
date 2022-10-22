let decider;
let playStatus = false;
let playButton = document.getElementById('playBtn');

let ones = document.getElementById('ones');
let tens = document.getElementById('tens');
let hundreds = document.getElementById('hundreds');


function stopWatch() {

    mili = ones.textContent;
    seconds = tens.textContent;
    minutes = hundreds.textContent;
    mili++;

    ones.innerHTML = mili;

    if (mili < 10) {
        ones.innerHTML = '0' + mili;
    } else if (mili > 99) {
        ones.innerHTML = "00";
        seconds++;

        if (seconds < 10) {
            tens.innerHTML = '0' + seconds;
        } else if (seconds > 59) {
            tens.innerHTML = '00'
            minutes++;
            if (minutes < 10) {
                hundreds.innerHTML = '0' + minutes;
            } else {
                hundreds.innerHTML = minutes;
            }
        } else {
            tens.innerHTML = seconds;
        }

    } else {
        ones.innerHTML = mili;
    }

}

function startWatch() {
    if (playStatus) {
        playStatus = false;
        clearInterval(decider);
        playButton.title = "Start";
        playButton.innerHTML = "<i class='fa fa-play'></i>";
    } else {
        playStatus = true;
        decider = setInterval(stopWatch, 10);
        playButton.title = "Pause";
        playButton.innerHTML = "<i class='fa fa-pause'></i>";
    }
}

function resetWatch() {
    clearInterval(decider);
    hundreds.textContent = "00";
    tens.textContent = "00";
    ones.textContent = "00";
    playButton.innerHTML = "<i class='fa fa-play'></i>";
    playButton.title = "Start";
    playStatus = false;
}