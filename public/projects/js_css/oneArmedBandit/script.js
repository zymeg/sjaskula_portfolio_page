const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const rate = document.getElementById('rate');
const play = document.getElementById('play');

const stats = document.getElementById('stats');

const gameStats = document.getElementById('gameStats')

var wins = 0;
var lost = 0;
var gameCount = 0;
var resources = 200;
const multiply = 3;

const colours = [
    '#d13b3b',
    '#c49527',
    '#b5cc23',
    '#52d124',
    '#52d124',
    '#7824d1',
    '#7824d1',
    '#7824d1'
];

function showStats() {
    stats.innerHTML = `<span>Your resources before next game: <b>${resources}$</b></span>
        <span>You rolled <b>${gameCount}</b> times, you lose for <b>${lost}</b> times and win for <b>${wins} </b>times</span>`;
}

function showGameStats(x){
    if(x === true) gameStats.innerHTML = `<h3>In this game: </h3><span>You bet : ${rate.value}$</span><span class='win'>You won: ${rate.value * 3}</span>`;
    else gameStats.innerHTML = `<h3>In this game: </h3><span>you bet : ${rate.value}$</span><span class='lose'>You lose: ${rate.value}$</span>`;
}

showStats();


function randomColor() {
    let Color = Math.floor(Math.random() * (7 - 0)) + 0;
    return colours[Color];
}

function checkWin(x, y, z){
    if(x == y && y == z) return true;
    else if(x != y && y != z && x != z) return true;
    else return false
}

function game() {
    if(isNaN(rate.value) || rate.value < 1 || rate.value > resources){
        alert('Enter possible rate');
    }else{
        resources -= rate.value;

        let firstColor = randomColor();
        let secondColor = randomColor();
        let thirdColor = randomColor();

        first.style.backgroundColor = firstColor;
        second.style.backgroundColor = secondColor;
        third.style.backgroundColor = thirdColor;

        let didWon = checkWin(firstColor, secondColor, thirdColor);

        if(didWon){ 
            ++wins;
            resources += rate.value * 3;
        }
        else {
            ++lost;
        }

        ++gameCount;

        showStats();
        showGameStats(didWon);

        rate.setAttribute('max', resources);

    }

}

play.addEventListener('click', game);

