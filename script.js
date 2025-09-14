let scoreStr = localStorage.getItem('SCORE');
let score_S;
resetScore (scoreStr);
function resetScore (scoreStr){
    score_S = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
            lost: 0,
            tie: 0,
        };
    score_S.displayScore = function () {
        return `score:
                         Win: ${score_S.win},
                         Lost: ${score_S.lost}, 
                        Tie: ${score_S.tie}`;
    };
    showResult();
}


function generateComputerChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber >= 0 && randomNumber <= 1) {
        return 'Bat';
    }
    else if (randomNumber >= 1 && randomNumber <= 2) {
        return 'Ball';

    }
    else {
        return 'Stump';
    }
}
function result(userMove, computerMove) {
    if (userMove === 'Bat') {
        if (computerMove === 'Bat') {
            score_S.tie++;
            return `it's a tie`;
        }
        else if (computerMove === 'Ball') {
            score_S.win++;
            return 'user won';
        }
        else {
            score_S.lost++;
            return 'computer won';
        }
    }
    else if (userMove === 'Ball') {
        if (computerMove === 'Bat') {
            score_S.lost++;
            return 'computer won';
        }
        else if (computerMove === 'Ball') {
            score_S.tie++;
            return `it's a tie`;
        }
        else {
            score_S.win++;
            return 'user won';
        }

    }
    else {
        if (computerMove === 'Bat') {
            score_S.lost++;
            return 'computer won';
        }
        else if (computerMove === 'Ball') {
            score_S.win++;
            return 'user won';
        }
        else {
            score_S.tie++;
            return `it's a tie`;
        }

    }
}

function showResult(userMove, computerChoice, resultMsg) {
    localStorage.setItem('SCORE', JSON.stringify(score_S));

    document.querySelector('#user-move').innerText = userMove?`you have choosen ${userMove}`: '';
    document.querySelector('#computer-move').innerText = computerChoice ?`computer choice is ${computerChoice}`: '';
    document.querySelector('#result').innerText =resultMsg || '';
    document.querySelector('#score').innerText = score_S.displayScore();
}
function play(userMove) {
    let computerChoice = generateComputerChoice();
    let resultMsg = result(userMove, computerChoice);
    showResult(userMove, computerChoice, resultMsg);
}
//   <img src="bat.png" onclick="play('Bat')">
        // <img src="ball.png"  onclick="play('Ball')">
        // <img src="stump.png" onclick="play('Stump')">></img>