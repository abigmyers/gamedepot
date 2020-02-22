const playGame = (userChoice) => {
    const computerChoices = ["rock", "paper", "scissors"];
    var computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    var willItHappen = Math.floor(Math.random() * 60);

    console.log(willItHappen + " will i happen");

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