const buttons = document.querySelectorAll('.choices');
const resultText = document.querySelector('.result p');
const userScore = document.getElementById('userscor');
const compScore = document.getElementById('compscor');
const resetButton = document.querySelector('.reset-button');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        const buttonId = event.target.id;
        playGame(buttonId);
    });
});


function playGame(buttonId) {
    const choices = ['rock', 'paper', 'scissors'];

    const randomIndex = Math.floor(Math.random() * 3);

    const computerChoice = choices[randomIndex];

    const userChoice = buttonId;

    let winner = true;

    if (userChoice === computerChoice) {
        gamedraw('Game Draw');
    } else {
        if ((userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')) {
            winner = true;
        } else {
            winner = false;
        }

        if (winner) {
            displayMsg('You Won');
        } else {
            displayMsg('You Lost');
        }
    }
}



function displayMsg(msg) {
    resultText.textContent = msg;
    if (msg === 'You Won') {
        userScore.textContent = parseInt(userScore.textContent) + 1;
        resultText.style.border = '2px solid transparent';
     
        resultText.style.backgroundColor = 'green'; 
    } else if (msg === 'You Lost') {
        compScore.textContent = parseInt(compScore.textContent) + 1;
        resultText.style.border = '2px solid transparent'; 
     
        resultText.style.backgroundColor = 'red'; 
    }
}

function gamedraw(msg) {
    resultText.textContent = msg;
    resultText.style.borderColor = 'black'; 
    resultText.style.backgroundColor = 'white'; 
 
}

resetButton.addEventListener('click', function() {
    userScore.textContent = '0';
    compScore.textContent = '0';
});
