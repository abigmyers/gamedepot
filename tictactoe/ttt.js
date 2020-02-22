// 0 for empty, 1 for X, 2 for O
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const addMarker = (id) => {
    if(board[id] == 0){
        board[id] = 1;

        document.getElementById(id).src = "x.png";

        if(testForEnd()) {
            if(testForWin() == 1){
                displayWin();
                setTimeout(newGame, 3000);
            } else {
                displayLoss();
                setTimeout(sameGame, 3000);
            }
        } else {
            if(testForWin() == 1){
                displayWin();
                setTimeout(newGame, 3000);
            } else if(testForWin() == 2) {
                displayLoss();
                setTimeout(sameGame, 3000);
            } else {
                computerMove();
            }
        }
    }
}

const computerMove = () => {
    let moved = false;

    while(!moved) {
        let index = Math.floor(Math.random() * 9);
        if(board[index] == 0){
            board[index] = 2;
            moved = true;
            document.getElementById(index).src = "o.png";

            if(testForWin() == 2) {
                displayLoss();
                setTimeout(sameGame, 3000);
            }
        }
    }
}

const testForEnd = () => {
    for(let i = 0; i < 9; i++) {
        if(board[i] == 0)
            return false;
    }
    return true;
}

// 0 for nothing, 1 for user win, 2 for computer win
const testForWin = () => {
    if((board[0] == 1 && board[1] == 1 && board[2] == 1) ||
        (board[3] == 1 && board[4] == 1 && board[5] == 1) ||
        (board[6] == 1 && board[7] == 1 && board[8] == 1) ||
        (board[0] == 1 && board[3] == 1 && board[6] == 1) ||
        (board[1] == 1 && board[4] == 1 && board[7] == 1) ||
        (board[2] == 1 && board[5] == 1 && board[8] == 1) ||
        (board[0] == 1 && board[4] == 1 && board[8] == 1) ||
        (board[2] == 1 && board[4] == 1 && board[6] == 1)
    ) {
        return 1;
    } else if((board[0] == 2 && board[1] == 2 && board[2] == 2) ||
        (board[3] == 2 && board[4] == 2 && board[5] == 2) ||
        (board[6] == 2 && board[7] == 2 && board[8] == 2) ||
        (board[0] == 2 && board[3] == 2 && board[6] == 2) ||
        (board[1] == 2 && board[4] == 2 && board[7] == 2) ||
        (board[2] == 2 && board[5] == 2 && board[8] == 2) ||
        (board[0] == 2 && board[4] == 2 && board[8] == 2) ||
        (board[2] == 2 && board[4] == 2 && board[6] == 2)
    ) {
        return 2;
    } else {
        return 0;
    }
}

const displayWin = () => {
    document.getElementById("result").innerHTML = "YOU WIN!";
}

const displayLoss = () => {
    document.getElementById("result").innerHTML = "YOU LOSE.";
}

const newGame = () => {
    const hrefs = [
        "../rockpaperscissors/rps.html",
        "../snake/snake.html",
        "../ttt.html"
    ];

    let randomNumber = Math.floor(Math.random() * hrefs.length);
    console.log(randomNumber);
    var nextGame = hrefs[randomNumber];
    console.log(nextGame);

    window.location.href = nextGame;
}

const sameGame = () => {
    window.location.href = "./ttt.html";
}