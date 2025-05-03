document.addEventListener('DOMContentLoaded', () => {

    const resetBtn = document.querySelector('.game__again'),
        gameCheckBtn = document.querySelector('.game__check'),
        statusImg = document.querySelector('.status img'),
        statusText = document.querySelector('.status span'),
        score = document.querySelector('.score span'),
        highscore = document.querySelector('.highscore span'),
        winResult = document.querySelector('.game__result-cover span'),
        body = document.body,
        inp = document.querySelector('.game__actions input');



    const min = 1;
    const max = 20;

    let limit = 20;


    let reset = limit;
    let gameStatus = true;
    let mainNum = generateNum(min, max);

    document.querySelector('.game__range .min').textContent = min;
    document.querySelector('.game__range .max').textContent = max;
    score.textContent = limit;


    function high() {
        statusImg.src = './img/high.svg';
        statusText.textContent = 'Too high!';
        statusImg.style.display = 'inline';
    }

    function low() {
        statusImg.src = './img/low.svg';
        statusText.textContent = 'Too low!';
        statusImg.style.display = 'inline';
    }

    function win() {
        statusImg.src = './img/correct.svg';
        statusText.textContent = 'Correct Number!';
        statusImg.style.display = 'inline';
        winResult.textContent = mainNum;
        if (Number(highscore.textContent < limit)) {
            highscore.textContent = limit;
        }
        gameStatus = false;
        body.style.backgroundColor = 'green';
        inp.style = 'border: 3px solid rgb(255, 255, 255);';
    }

    function lost() {
        statusImg.src = './img/bom.svg';
        statusText.textContent = 'You lost!';
        statusImg.style.display = 'inline';
        gameStatus = false;

        inp.style = 'border: 3px solid #b7b7b7;';
        body.style.backgroundColor = '#881a07';
    }

    function startNew() {
        mainNum = generateNum(min, max);
        // console.log(mainNum);
        score.textContent = reset;
        limit = reset;
        statusText.textContent = 'Start guessing...';
        statusImg.style.display = 'none';
        winResult.textContent = '?';
        gameStatus = true;
        inp.value = '';
        inp.style = 'border: 3px solid #3E464B;';
        body.style.backgroundColor = '#1B2B34';
    }


    function generateNum(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    gameCheckBtn.addEventListener('click', () => {
        const gameInput = inp.value;
        if (!isNaN(gameInput) && gameInput.trim() !== '' && limit > 0 && gameStatus) {

            if (+gameInput !== mainNum) {
                score.textContent = --limit;
            }

            if (+gameInput === mainNum) {
                win();
            }


            if (+gameInput > mainNum) {
                high();
            }

            if (+gameInput < mainNum) {
                low();
            }



            if (limit === 0) {
                lost();
            }

        }
    });


    resetBtn.addEventListener('click', () => {
        startNew();
    });



});