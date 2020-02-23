const playGame = (userChoice) => {
    document.getElementById("rock").onclick = "";
    document.getElementById("paper").onclick = "";
    document.getElementById("scissors").onclick = "";

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
        "../2048/2048.html",
        "../boingyball/boingyball.html",
        "../bouncingball/bouncingball.html",
        "../clickthespot/clickthespot.html",
        "../nonogram/nono.html",
        "../ohhi/ohhi.html",
        "../rickroll/rick.html",
        "../rockpaperscissors/rps.html",
        "../rockpaperscissorscursed/rpsc.html",
        "../snake/snake.html",
        "../snakecursed/snakec.html",
        "../sudoku/sudoku.html",
        "../textadventure/ta.html",
        "../tictactoe/ttt.html",
        "../tictactoecursed/tttc.html"
    ];

    let randomNumber = Math.floor(Math.random() * hrefs.length);
    var nextGame = hrefs[randomNumber];

    window.location.href = nextGame;
}

const sameGame = () => {
    window.location.href = "../rockpaperscissors/rps.html";
}