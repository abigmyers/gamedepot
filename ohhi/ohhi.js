let canvas;
let cxt;
let gridsize;
let blank = "#5a5a5a";
let red = "#cc2b2b";
let startRed = "#ee2b2b";
let blue = "#2b73cc";
let startBlue = "#2b73ee";
let startOptions = [
    [
        [3, 0, 3, 0],
        [0, 0, 0, 4],
        [4, 0, 0, 0],
        [0, 3, 0, 0],
    ],
    [
        [3, 0, 0, 3],
        [0, 0, 0, 0],
        [0, 0, 3, 0],
        [4, 4, 0, 0],
    ],
    [
        [4, 0, 0, 0],
        [4, 4, 0, 0],
        [0, 0, 3, 0],
        [0, 0, 0, 0],
    ]

];
let grid;

function startGame(document) {
    canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    cxt = canvas.getContext("2d");
    document.addEventListener('click', onClick);
    gridsize = Math.floor(Math.min(canvas.height / 4, canvas.width / 4)) - 10;
    grid = startOptions[Math.floor(Math.random() * startOptions.length)];
    draw();
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
            switch (grid[i][j]) {
                case 0:
                    cxt.fillStyle = blank;
                    break;

                case 1:
                    cxt.fillStyle = red;
                    break;

                case 2:
                    cxt.fillStyle = blue;
                    break;

                case 3:
                    cxt.fillStyle = startRed;
                    break;

                case 4:
                    cxt.fillStyle = startBlue;
                    break;
            }
            cxt.fillRect(i * gridsize + 22, j * gridsize + 22, gridsize - 2, gridsize - 2);
        }
    }
}

function onClick(event) {
    let i = Math.floor((event.offsetX - 20) / gridsize);
    let j = Math.floor((event.offsetY - 20) / gridsize);

    switch (grid[i][j]) {
        case 0:
            grid[i][j] = 1;
            break;

        case 1:
            grid[i][j] = 2;
            break;

        case 2:
            grid[i][j] = 0;
            break;

        case 3:
        case 4:
            break;
    }
    if (checkWin()) {
        const hrefs = [
            "../rockpaperscissors/rps.html",
            "../rickroll/rick.html",
            "../clickthespot/clickthespot.html"
        ];

        let randomNumber = Math.floor(Math.random() * hrefs.length);
        var nextGame = hrefs[randomNumber];
        window.location.href = nextGame;
    }
    draw();
}

function checkWin() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                return false;
            }
        }
    }
    return check2Vert() && check2Horiz() && checkMatchingColumns() && checkMatchingRows();
}

function check2Horiz() {
    for (let i = 0; i < 4; i++) {
        let blues = 0;
        let reds = 0;
        for (let j = 0; j < 4; j++) {
            if (grid[j][i] === 1) {
                reds++;
            } else if (grid[j][i] === 2) {
                blues++;
            }

            if (reds > 2 || blues > 2) {
                return false;
            }
        }
    }
    return true;
}

function checkMatchingRows() {
    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < 4; j++) {
            let different = false;
            for (let k = 0; k < 4; k++) {
                different = grid[i][k] !== grid[j][k];
                if (different) {
                    break;
                }
            }
            if (!different) {
                return false;
            }
        }
    }
    return true;
}

function checkMatchingColumns() {
    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < 4; j++) {
            let different = false;
            for (let k = 0; k < 4; k++) {
                different = grid[k][i] !== grid[k][j];
                if (different) {
                    break;
                }
            }
            if (!different) {
                return false;
            }
        }
    }
    return true;
}

function check2Vert() {
    for (let i = 0; i < 4; i++) {
        let blues = 0;
        let reds = 0;
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 1) {
                reds++;
            } else if (grid[i][j] === 2) {
                blues++;
            }

            if (reds > 2 || blues > 2) {
                return false;
            }
        }
    }
    return true;
}
