var grid1 = [
    0, 0, 0, 2, 6, 0, 7, 0, 1,
    6, 8, 0, 0, 7, 0, 0, 9, 0,
    1, 9, 0, 0, 0, 4, 5, 0, 0,
    8, 2, 0, 1, 0, 0, 0, 4, 0,
    0, 0, 4, 6, 0, 2, 9, 0, 0,
    0, 5, 0, 0, 0, 3, 0, 2, 8,
    0, 0, 9, 3, 0, 0, 0, 7, 4,
    0, 4, 0, 0, 5, 0, 0, 3, 6,
    7, 0, 3, 0, 1, 8, 0, 0, 0
];

var puzzle1 = [
    4, 3, 5, 2, 6, 9, 7, 8, 1,
    6, 8, 2, 5, 7, 1, 4, 9, 3,
    1, 9, 7, 8, 3, 4, 5, 6, 2,
    8, 2, 6, 1, 9, 5, 3, 4, 7,
    3, 7, 4, 6, 8, 2, 9, 1, 5,
    9, 5, 1, 7, 4, 3, 6, 2, 8,
    5, 1, 9, 3, 2, 6, 8, 7, 4,
    2, 4, 8, 9, 5, 7, 1, 3, 6,
    7, 6, 3, 4, 1, 8, 2, 5, 9
];

var grid2 = [
    1, 0, 0, 4, 8, 9, 0, 0, 6,
    7, 3, 0, 0, 0, 0, 0, 4, 0,
    0, 0, 0, 0, 0, 1, 2, 9, 5,
    0, 0, 7, 1, 2, 0, 6, 0, 0,
    5, 0, 0, 7, 0, 3, 0, 0, 8,
    0, 0, 6, 0, 9, 5, 7, 0, 0,
    9, 1, 4, 6, 0, 0, 0, 0, 0,
    0, 2, 0, 0, 0, 0, 0, 3, 7,
    8, 0, 0, 5, 1, 2, 0, 0, 4
];

var puzzle2 = [
    1, 5, 2, 4, 8, 9, 3, 7, 6,
    7, 3, 9, 2, 5, 6, 8, 4, 1,
    4, 6, 8, 3, 7, 1, 2, 9, 5,
    3, 8, 7, 1, 2, 4, 6, 5, 9,
    5, 9, 1, 7, 6, 3, 4, 2, 8,
    2, 4, 6, 8, 9, 5, 7, 1, 3,
    9, 1, 4, 6, 3, 7, 5, 8, 2,
    6, 2, 5, 9, 4, 8, 1, 3, 7,
    8, 7, 3, 5, 1, 2, 9, 6, 4
];

var grid3 = [
    8, 0, 0, 9, 3, 0, 0, 0, 2,
    0, 0, 9, 0, 0, 0, 0, 4, 0,
    7, 0, 2, 1, 0, 0, 9, 6, 0,
    2, 0, 0, 0, 0, 0, 0, 9, 0,
    0, 6, 0, 0, 0, 0, 0, 7, 0,
    0, 7, 0, 0, 0, 6, 0, 0, 5,
    0, 2, 7, 0, 0, 8, 4, 0, 6,
    0, 3, 0, 0, 0, 0, 5, 0, 0,
    5, 0, 0, 0, 6, 2, 0, 0, 8
];

var puzzle3 = [
    8, 4, 6, 9, 3, 7, 1, 5, 2,
    3, 1, 9, 6, 2, 5, 8, 4, 7,
    7, 5, 2, 1, 8, 4, 9, 6, 3,
    2, 8, 5, 7, 1, 3, 6, 9, 4,
    4, 6, 3, 8, 5, 9, 2, 7, 1,
    9, 7, 1, 2, 4, 6, 3, 8, 5,
    1, 2, 7, 5, 9, 8, 4, 3, 6,
    6, 3, 8, 4, 7, 1, 5, 2, 9,
    5, 9, 4, 3, 6, 2, 7, 1, 8
];

var grid4 = [
    0, 0, 0, 0, 0, 6, 0, 8, 0,
    0, 0, 9, 1, 0, 5, 3, 7, 2,
    0, 8, 0, 7, 0, 0, 0, 1, 6,
    0, 0, 0, 0, 0, 0, 0, 3, 4,
    0, 0, 0, 3, 5, 1, 0, 0, 0,
    7, 3, 0, 0, 0, 0, 0, 0, 0,
    6, 1, 0, 0, 0, 8, 0, 2, 0,
    8, 2, 3, 9, 0, 4, 6, 0, 0,
    0, 7, 0, 6, 0, 0, 0, 0, 0
];

var puzzle4 = [
    1, 5, 7, 2, 3, 6, 4, 8, 9,
    4, 6, 9, 1, 8, 5, 3, 7, 2,
    3, 8, 2, 7, 4, 9, 5, 1, 6,
    5, 9, 1, 8, 6, 7, 2, 3, 4,
    2, 4, 6, 3, 5, 1, 7, 9, 8,
    7, 3, 8, 4, 9, 2, 1, 6, 5,
    6, 1, 4, 5, 7, 8, 9, 2, 3,
    8, 2, 3, 9, 1, 4, 6, 5, 7,
    9, 7, 5, 6, 2, 3, 8, 4, 1
];

var grid5 = [
    8, 3, 0, 0, 2, 9, 0, 0, 0,
    0, 9, 0, 7, 0, 0, 0, 6, 0,
    4, 0, 0, 0, 1, 0, 2, 0, 0,
    0, 4, 8, 0, 0, 2, 0, 1, 9,
    0, 0, 9, 0, 0, 0, 4, 0, 0,
    1, 2, 0, 9, 0, 0, 3, 5, 0,
    0, 0, 4, 0, 6, 0, 0, 0, 7,
    0, 5, 0, 0, 0, 1, 0, 2, 0,
    0, 0, 0, 3, 5, 0, 0, 4, 1
];

var puzzle5 = [
    8, 3, 6, 5, 2, 9, 1, 7, 4,
    2, 9, 1, 7, 4, 3, 8, 6, 5,
    4, 7, 5, 8, 1, 6, 2, 9, 3,
    5, 4, 8, 6, 3, 2, 7, 1, 9,
    3, 6, 9, 1, 7, 5, 4, 8, 2,
    1, 2, 7, 9, 8, 4, 3, 5, 6,
    9, 1, 4, 2, 6, 8, 5, 3, 7,
    7, 5, 3, 4, 9, 1, 6, 2, 8,
    6, 8, 2, 3, 5, 7, 9, 4, 1
];

var grid = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0
];

var possibleGrids = [grid1, grid2, grid3, grid4, grid5];
var possiblePuzzles = [puzzle1, puzzle2, puzzle3, puzzle4, puzzle5];
var currentGrid = 0;

const fillPuzzle = () => {
    currentGrid = Math.floor(Math.random() * possibleGrids.length);
    grid = [...possibleGrids[currentGrid]];

    for(let i = 0; i < 81; i++) {
        if(grid[i] != 0) {
            document.getElementsByTagName("td")[i].innerHTML = grid[i];
        }
    }
}

const updateGrid = (index, value) => {
    grid[index] = parseInt(value);

    if(!grid.includes(0)) {
        checkForWin();
    }
}

const checkForWin = () => {
    if(JSON.stringify(grid) == JSON.stringify(possiblePuzzles[currentGrid])) {
        document.getElementById("result").innerHTML = "YOU WIN!";
        document.getElementById("result").style = "color: lime";
        setTimeout(newGame, 3000);
    } else {
        document.getElementById("result").innerHTML = "KEEP TRYING...";
        document.getElementById("result").style = "color: red";
    }
}

const newGame = () => {
    const hrefs = [
        "../2048/2048.html",
        "../bouncingball/bouncingball.html",
        "../clickthespot/clickthespot.html",
        "../nonogram/nono.html",
        "../ohhi/ohhi.html",
        "../rickroll/rick.html",
        "../rockpaperscissors/rps.html",
        "../rockpaperscissorscursed/rpsc.html",
        "../snake/snake.html",
        "../snakecursed/snakec.html",
        "../textadventure/ta.html",
        "../tictactoe/ttt.html",
        "../tictactoecursed/tttc.html"
    ];

    let randomNumber = Math.floor(Math.random() * hrefs.length);
    var nextGame = hrefs[randomNumber];

    window.location.href = nextGame;
}