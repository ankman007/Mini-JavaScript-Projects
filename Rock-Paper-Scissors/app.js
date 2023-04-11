const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
updateScore(); 

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
    if(!isAutoPlaying){
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying = true;
    } else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function playGame(playerMove){ 

    const computerMove = pickComputerMove();
    let result = '';
    
    if (playerMove == 'Rock'){
        if(computerMove == 'Rock')
            result = 'Tie';
        else if(computerMove == 'Paper')
            result = 'Lose';
        else if(computerMove == 'Scissors')
            result = 'Win';
    }
        
    else if(playerMove == 'Paper'){
        if(computerMove == 'Rock')
            result = 'Win';
        else if(computerMove == 'Paper'){
            result = 'Tie';
        }
        else if(computerMove == 'Scissors'){
            result = 'Lose';
        }
    }

    else if (playerMove == 'Scissors'){
        if(computerMove == 'Rock')
            result = 'Lose';
        else if(computerMove == 'Paper')
            result = 'Win';
        else if(computerMove == 'Scissors')
            result = 'Tie';
    }

    if (result === 'Win'){
        score.wins += 1;
    }
    else if(result === 'Lose'){
        score.losses += 1;
    }
    else if(result === 'Tie'){
        score.ties += 1;
    }
    
    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result')
        .innerHTML = result;
    
    document.querySelector('.js-moves').innerHTML = `You 
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;            
}

function updateScore(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;

}

function pickComputerMove(){
    const randomNumber =Math.floor(Math.random()*3)+1;
            
    if(randomNumber == 1)
        computerMove = 'Rock';
    else if(randomNumber == 2)
        computerMove = 'Paper';
    else
        computerMove = 'Scissors';

    return computerMove;
}