const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
}
function checkResult(choice){
    console.log(coinFlip());
    let res = coinFlip(); 
    let outcome;

    if (res === choice){
        score.wins += 1;
        outcome = 'win';
    }
    else if (res !== choice){
        score.losses += 1;
        outcome = 'lose';
    }
    
    console.log(score);
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.result').innerHTML = `You ${outcome}!!`;

    document.querySelector('.moves')
        .innerHTML = `You choose ${choice} - Coin Filp was ${res}`;

    updateScore();

}
function updateScore(){
    document.querySelector('.score')
        .innerHTML = `Wins: ${score.wins} | Losses: ${score.losses}`;
}

function coinFlip(){
    let coinFlip = Math.floor(Math.random()*2)+1;
    if(coinFlip === 1)
        coinFlip = 'heads';
    else
        coinFlip = 'tails';
    
    return coinFlip;
}
