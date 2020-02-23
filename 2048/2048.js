let canvas;
let cxt;
let gridsize;
let grid;
let a = "#f0fa4a";
let b = "#f0ea4a";
let c = "#f0da4a";
let d = "#f0ca4a";
let e = "#f0ba4a";
let f = "#f0aa4a";
let g = "#f09a4a";
let h = "#f08a4a";
let i = "#f07a4a";
let j = "#f06a4a";
let k = "#f05a4a";
function startGame(document) {
    canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    cxt = canvas.getContext("2d");
    document.addEventListener('keydown', keyPushed)
    gridsize = Math.floor(Math.min(canvas.height / 4, canvas.width / 4)) - 10;
    grid = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ];
    addSquare();
    addSquare();
    draw();
}

function keyPushed(event) {
    switch (event.keyCode) {
        case 38: case 87:
            collapseUp();
            break;

        case 37: case 65:
            collapseLeft();
            break;

        case 39: case 68:
            collapseRight();
            break;

        case 40: case 83:
            collapseDown();
            break;
    }
    addSquare();
    draw();
}

function addSquare() {
    let openSpots = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                openSpots.push({x: i, y: j});
            }
        }
    }

    if (openSpots.length > 0) {
        let spot = openSpots[Math.floor(Math.random() * openSpots.length)];
        if (Math.random() >= 0.9) {
            grid[spot.x][spot.y] = 4;
        } else {
            grid[spot.x][spot.y] = 2;
        }
    } else {
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
}

function draw() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            cxt.strokeRect(i * gridsize + 20, j * gridsize + 20, gridsize, gridsize);
        }
    }
    drawRectangles()
}

function drawRectangles() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            cxt.clearRect(i * gridsize + 22, j * gridsize + 22, gridsize - 2, gridsize - 2);
            if (grid[i][j] !== 0) {
                cxt.fillStyle = colorMapper(grid[i][j]);
                cxt.fillRect(i * gridsize + 22, j * gridsize + 22, gridsize - 2, gridsize - 2);
                cxt.textAlign = "center";
                cxt.font = `bold ${gridsize - 20}px Arial`;
                if (grid[i][j] > 100) {
                    cxt.font = `bold ${gridsize - 120}px Arial`;
                }
                if (grid[i][j] > 1000) {
                    cxt.font = `bold ${gridsize - 175}px Arial`;
                }
                cxt.fillStyle = "#000000";
                cxt.fillText(grid[i][j], i * gridsize + 20 + gridsize / 2, (j + 1) * gridsize - 20);
            }
        }
    }
}

function collapseUp() {
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 3; k++) {
            for (let j = 0; j < 3; j++) {
                if (grid[i][j] === grid[i][j + 1] || grid[i][j] === 0) {
                    grid[i][j] = grid[i][j] + grid[i][j + 1];
                    grid[i][j + 1] = 0;
                }
            }
        }
    }
}

function collapseDown() {
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 3; k++) {
            for (let j = 1; j < 4; j++) {
                if (grid[i][j] === grid[i][j - 1] || grid[i][j] === 0) {
                    grid[i][j] = grid[i][j] + grid[i][j - 1];
                    grid[i][j - 1] = 0;
                }
            }
        }
    }
}

function collapseLeft() {
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (grid[i][j] === grid[i + 1][j] || grid[i][j] === 0) {
                    grid[i][j] = grid[i][j] + grid[i + 1][j];
                    grid[i + 1][j] = 0;
                }
            }
        }
    }
}

function collapseRight() {
    for (let k = 0; k < 3; k++) {
        for (let i = 1; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (grid[i][j] === grid[i - 1][j] || grid[i][j] === 0) {
                    grid[i][j] = grid[i][j] + grid[i - 1][j];
                    grid[i - 1][j] = 0;
                }
            }
        }
    }
}

function colorMapper(value) {
    switch (value) {
        case 2:
            return a;

        case 4:
            return b;

        case 8:
            return c;

        case 16:
            return d;

        case 32:
            return e;

        case 64:
            return f;

        case 128:
            return g;

        case 256:
            return h;

        case 512:
            return i;

        case 1024:
            return j;

        case 2048: default:
            return k;

    }
}
