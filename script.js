
const yourName = document.querySelector('#yourname');
const theirName = document.querySelector('#theirname');
const calcButton = document.querySelector('button');

const congo = document.querySelector('#congo');
const warning = document.querySelector('#warning');
const danger = document.querySelector('#danger');

const congoMessage = document.querySelector('#congo-message');
const warningMessage = document.querySelector('#warning-message');
const dangerMessage = document.querySelector('#danger-message');


function loveScore() {
    const score = Math.ceil(Math.random() * 100);
    if (score < 10) {
        return loveScore();
    } else {
        return score;
    }
}

function calculateLove() {
    const checkYourName = yourName.value;
    const checkTheirName = theirName.value;
    const score = loveScore();

    if (checkYourName.length <= 2 || checkTheirName.length <= 2) {
        alert('Name Must be greater than 2 letter');
    } else {

        if (score > 69) {
            warning.style.display = 'none';
            danger.style.display = 'none';
            congo.style.display = 'block';
            congoMessage.innerText = 'Aww! Your Love is ' + score + '%. You & ' + theirName.value + ' Love each other like Laili Majnu. You should get married with ' + theirName.value + '. Best of luck!';
        }
        else if (score > 30) {
            congo.style.display = 'none';
            danger.style.display = 'none';
            warning.style.display = 'block';
            warningMessage.innerText = 'Good Wished! Your Love is ' + score + '%. You & ' + theirName.value + ' Love each other like Salt. You should put more effort. Best of luck!';
        }
        if (score < 30) {
            congo.style.display = 'none';
            warning.style.display = 'none';
            danger.style.display = 'block';
            dangerMessage.innerText = 'OH NO! Your Love is ' + score + '%. You & ' + theirName.value + ' Love each other like Oil.';
        }
    }
}
