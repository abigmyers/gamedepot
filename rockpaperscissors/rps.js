const playGame = (userChoice) => {
    const computerChoices = ["rock", "paper", "scissors"];
    var computerChoice = computerChoices[Math.floor(Math.random() * 3)];

    document.getElementById("computerResult").innerHTML = "THE COMPUTER CHOOSES: " + computerChoice;

    let gameResult = findGameResult(userChoice, computerChoice);

    if(gameResult == "WIN") {
        setTimeout(newGame, 3000);
    } else {
        setTimeout(sameGame, 3000);
    }
}

const findGameResult = (userChoice, computerChoice) => {
    if(userChoice == computerChoice) {
        gameResult = "TIE";
    } else {
        if (userChoice == "rock") {
            if(computerChoice == "scissors") {
                gameResult = "WIN";
            } else {
                gameResult = "LOSE";
            }
        } else if (userChoice == "paper") {
            if(computerChoice == "rock") {
                gameResult = "WIN";
            } else {
                gameResult = "LOSE";
            }
        } else {
            if(computerChoice == "paper") {
                gameResult = "WIN";
            } else {
                gameResult = "LOSE";
            }
        }
    }

    document.getElementById("gameResult").innerHTML = "YOU " + gameResult;

    return gameResult;
}

const newGame = () => {
    const hrefs = [
        "../rockpaperscissors/rps.html",
        "../snake/snake.html"
    ];

    let randomNumber = Math.floor(Math.random() * hrefs.length);
    console.log(randomNumber);
    var nextGame = hrefs[randomNumber];
    console.log(nextGame);

    window.location.href = nextGame;
}

const sameGame = () => {
    window.location.href = "../rockpaperscissors/rps.html";
}