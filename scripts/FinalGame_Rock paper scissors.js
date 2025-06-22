
    let randomNumber;
    let ramdomVal;
    
    let score = JSON.parse(localStorage.getItem('score')) ||
        {
            win : 0,
            tie : 0,
            lose : 0
        };

    showResults() ;    

    function computerMove() {
        randomNumber = Math.random();
        console.log(randomNumber);
        if (randomNumber <= 0.3) {
        ramdomVal = 'rock';
        }
    else if (randomNumber > 0.3 && randomNumber <=0.6)   {
        ramdomVal = 'paper';
    }
    else {ramdomVal = 'scissors';
    }
    //document.querySelector('.js-computer-result').innerHTML = ramdomVal;
return ramdomVal;
}

function rezOfCalculation(thrownVal) {
let results;
ramdomVal = computerMove();
    if (thrownVal === 'rock') {
        if (ramdomVal === 'scissors') {
            score.win = score.win + 1;
            results = 'You win!!';
        }
        else if (ramdomVal === 'rock') {
            score.tie = score.tie + 1;
            results = 'Tie!!';
        }
        else {
            score.lose = score.lose + 1;
            results = 'You lose( Try again!!';
        }
    }
    else if (thrownVal === 'paper') {
        if (ramdomVal === 'rock') {
            score.win = score.win + 1;
            results = 'You win!!';
        }
        else if (ramdomVal === 'paper') {
            score.tie = score.tie + 1;
            results = 'Tie!!';
        }
        else {
            score.lose = score.lose + 1;
            results = 'You lose( Try again!!';
        }
    }
    else if (thrownVal === 'scissors') {
        if (ramdomVal === 'paper') {
            score.win = score.win + 1;
            results = 'You win!!';
        }
        else if (ramdomVal === 'scissors') {
            score.tie = score.tie + 1;
            results = 'Tie!!';
        }
        else {
            score.lose = score.lose  + 1;
            results = 'You lose( Try again!!';
        }
    }
    localStorage.setItem('score', JSON.stringify(score));
    //alert(`Computer set ${ramdomVal}
    //So, ${results}.
    //        Total score: Wins:  ${score.win}, Loses: ${score.lose}, Ties: ${score.tie}`);
    showResults(); 
    document.querySelector('.js-total-result').innerHTML = 
        `You:
        <img src="images/${thrownVal}-emoji.png" class="move-icon">  - Computer: <img src="images/${ramdomVal}-emoji.png" class="move-icon"> `;  
        document.querySelector('.js-computer-result').innerHTML = results;
}    

function showResults() {
    document.querySelector('.js-score').innerHTML = 
        `Total score: Wins:  ${score.win}, Loses: ${score.lose}, Ties: ${score.tie}`;
}

const rock_var = document.querySelector('.js-rock-btn');
rock_var.addEventListener('click', 
    ()=> {
        rezOfCalculation('rock');
    }
);
const paper_var = document.querySelector('.js-paper-btn');
paper_var.addEventListener('click', 
    ()=> {
        rezOfCalculation('paper');
    }
);

const scissors_var = document.querySelector('.js-scissors-btn');
scissors_var.addEventListener('click', 
    ()=> {
        rezOfCalculation('scissors');
    }
);

document.body.addEventListener(
'keydown',
(event) => {
    if(event.key === 'r') {
        rezOfCalculation('rock');
    }
    else  if(event.key === 'p') {
        rezOfCalculation('paper');
    }
    else if (event.key === 's') {
        rezOfCalculation('scissors');
    }
}
);
let autoPlayVar = false;
let intervals;

function autoPlay() {
    if (!autoPlayVar) {
        intervals = setInterval (
            () => {
                const myVal = computerMove();
                rezOfCalculation(myVal);
            },
            1000
        );
        autoPlayVar = true;
    }
    else {
        clearInterval(intervals);
        autoPlayVar = false
    }
   


}

