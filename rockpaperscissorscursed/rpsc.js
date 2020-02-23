const playGame = (userChoice) => {
    const computerChoices = ["rock", "paper", "scissors"];
    var computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    var willItHappen = Math.floor(Math.random() * 60);

    resetImages("rock");
    resetImages("paper");
    resetImages("scissors");

    var name;

    if(willItHappen >= 50 ){
        name = "scissors";
        changeImages("scissors");
    } else if(willItHappen >= 45){
        name = "paper";
        changeImages("paper");
    } else if(willItHappen >= 30){
        name = "rock";
        changeImages("rock");
    } else{

    }

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
    window.location.href = "../rockpaperscissorscursed/rpsc.html";
}

const changeBackground = () => {
    var colors = ["#F6FF00", "#0FEB0C", "#FF00D4", "#FFB000", "#FF442F"];
    var color = Math.floor(Math.random() * colors.length);
    var num = Math.floor(Math.random() * 5);
    var time = num * 100;
    document.getElementById("body").style = "background-color: " + colors[color];
    setTimeout(changeBackground, time);
}

const changeImages = (name) => {
    document.getElementById(name).src = "devito.jpeg"
}

const resetImages = (photo) => {
    document.getElementById(photo).src = photo + ".png"
}