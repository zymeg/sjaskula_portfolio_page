var repeated = 0;
var tries = 0;


const expensesDiv = document.getElementById('expenses');
const mainPrizeDiv = document.getElementById('main_prize');
const winsDiv = document.getElementById('wins');
const balanceDiv = document.getElementById('balance');
var expenses = 0;
var wins = 0;

const couponPrize = 3;
const minMainPrize = 2000000;
var cumulation = minMainPrize;

const checked = document.getElementById('check');

var drawnDivs = document.getElementsByClassName('drawn');

expensesDiv.innerHTML = `You spent: ${expenses}$`;
mainPrizeDiv.innerHTML = `Main prize: ${minMainPrize}$`;
winsDiv.innerHTML = `You won: ${wins}$`;
balanceDiv.innerHTML = `Your balance: ${wins-expenses}$`;

const nothingDiv = document.getElementById('nothing');
var nothing = 0;
const oneDiv = document.getElementById('one');
var one = 0;
const twoDiv = document.getElementById('two');
var two = 0;
const threeDiv = document.getElementById('three');
var three = 0;
const fourDiv = document.getElementById('four');
var four = 0;
const fiveDiv= document.getElementById('five');
var five = 0;
const sixDiv = document.getElementById('six');
var six = 0;

nothingDiv.innerHTML = `You striked 0 for ${nothing} times.`;
oneDiv.innerHTML = `You striked 1 for ${one} times.`;
twoDiv.innerHTML = `You striked 2 for ${two} times.`;
threeDiv.innerHTML = `You striked 3 for ${three} times.`;
fourDiv.innerHTML = `You striked 4 for ${four} times.`;
fiveDiv.innerHTML = `You striked 5 for ${five} times.`;
sixDiv.innerHTML = `You striked 6 for ${six} times.`;

function random(){
    return Math.floor((Math.random() * 49) + 1);
    
}

function check_wins(x){
    switch(x){
        case 3:
            return 24;
            break;
        case 4: 
            return 164;
            break;
        case 5:
            return 5404;
            break;
        case 6: 
            return cumulation;
            break;
        default: 
            return 0;
            break;

    }

}

function check_cumulation(x){
    let number = Math.floor((Math.random() * 10) + 1);
    if(number == 5) return minMainPrize;
    else return x+1500000

}

function strikes(x){
    switch(x){
        case 0: 
            ++nothing;
            break;
        case 1: 
            ++one;
            break;
        case 2: 
            ++two;
            break;
        case 3:
            ++three;
            break;
        case 4:
            ++four;
            break;
        case 5: 
            ++five;
            break;
        case 6: 
            ++six;
            break;

    }

    nothingDiv.innerHTML = `You striked 0 for ${nothing} times.`;
    oneDiv.innerHTML = `You striked 1 for ${one} times.`;
    twoDiv.innerHTML = `You striked 2 for ${two} times.`;
    threeDiv.innerHTML = `You striked 3 for ${three} times.`;
    fourDiv.innerHTML = `You striked 4 for ${four} times.`;
    fiveDiv.innerHTML = `You striked 5 for ${five} times.`;
    sixDiv.innerHTML = `You striked 6 for ${six} times.`;

}

function check() {
    expenses += couponPrize;
    if(repeated === 1){
        numbers = [];
        drawn_sorted = [];
        drawn = [];
        tries = 0;
        for(let i = 0; i < drawnDivs.length; i++){
            drawnDivs[i].style.backgroundColor = '#f8fc03';
        
        }
    }
    
    var numbers = document.getElementsByTagName('input');
    var drawn = [];
    
    for(let i = 0; i<6; i++){
        var los = random();
        for(i=0; i < drawn.length; i++){
            if(los == drawn[i]){
                los = random();
            }

        }

        drawn.push(los);
    }

    


    var drawn_sorted = drawn.sort();

    for(let i = 0; i < 6; i++){
        drawnDivs[i].classList.add('show');
        drawnDivs[i].innerHTML = drawn_sorted[i];
    }
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j <= drawn.length; j++){
            if(numbers[i].value == drawn[j]){
                drawnDivs[j].style.backgroundColor = '#04cc04';
                tries++;
            }

        }

    }

    
    cumulation = check_cumulation(cumulation);
    wins += check_wins(tries);
    
    strikes(tries);

    expensesDiv.innerHTML = `You spent: ${expenses}$`;
    mainPrizeDiv.innerHTML = `Main prize: ${cumulation}$`;
    winsDiv.innerHTML = `You won: ${wins}$`;
    balanceDiv.innerHTML = `Your balance: ${wins-expenses}$`;
    repeated = 1;

}

checked.addEventListener('click', check);


