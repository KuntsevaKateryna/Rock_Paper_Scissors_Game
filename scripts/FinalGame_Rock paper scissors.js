
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
        ramdomVal = 'Rock';
        }
    else if (randomNumber > 0.3 && randomNumber <=0.6)   {
        ramdomVal = 'Paper';
    }
    else {ramdomVal = 'Scissors';
    }
    //document.querySelector('.js-computer-result').innerHTML = ramdomVal;
return ramdomVal;
}

function rezOfCalculation(thrownVal) {
let results;
    if (thrownVal === 'Rock') {
        if (ramdomVal === 'Scissors') {
            score.win = score.win + 1;
            results = 'You win!!';
        }
        else if (ramdomVal === 'Rock') {
            score.tie = score.tie + 1;
            results = 'Tie!!';
        }
        else {
            score.lose = score.lose + 1;
            results = 'You lose( Try again!!';
        }
    }
    else if (thrownVal === 'Paper') {
        if (ramdomVal === 'Rock') {
            score.win = score.win + 1;
            results = 'You win!!';
        }
        else if (ramdomVal === 'Paper') {
            score.tie = score.tie + 1;
            results = 'Tie!!';
        }
        else {
            score.lose = score.lose + 1;
            results = 'You lose( Try again!!';
        }
    }
    else if (thrownVal === 'Scissors') {
        if (ramdomVal === 'Paper') {
            score.win = score.win + 1;
            results = 'You win!!';
        }
        else if (ramdomVal === 'Scissors') {
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
