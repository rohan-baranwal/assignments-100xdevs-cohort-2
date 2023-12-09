/**
    ## Counter without setInterval

    Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. 
*/

const countDownTimer = (duration) => {
    let timeoutId;
    timeoutId = setTimeout(() => countDownTimer(duration - 1000), 1000)
    if (duration <= 0) {
        clearTimeout(timeoutId);
    }
    console.log(`Timer will stop in ${Math.trunc(duration / 1000)} seconds`)
}

// countDownTimer(4325);
countDownTimer(4000);