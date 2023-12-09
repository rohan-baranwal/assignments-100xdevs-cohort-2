/**
    ## Create a counter in JavaScript

    We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
    It should go up as time goes by in intervals of 1 second.

*/

const countDownTimer = (duration) => {
    const countDownInterval = setInterval(() => {
        console.log(`Timer will stop in ${Math.trunc(duration/1000)} seconds`)
        duration -= 1000;
        if (duration <= 0) {
            clearInterval(countDownInterval);
        }
    }, 1000)
};

countDownTimer(10000)