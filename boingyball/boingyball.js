let ballY = 50;
let vel = 0;
let gravity = 3;
let pipeDx = -15;
let pipeColor = "#00ad23";
let canvas;
let ctx;
let pipes = [];
let iterator = 0;

function startGame(document) {
    canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown", keyPush);
    ballY = Math.floor(Math.random() * 500 + 200);
    setInterval(loopGame, 1000 / 30);
}

function loopGame() {

    ctx.fillStyle = "#d3d3d3";
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = "#F3453f";
    ctx.arc(300, ballY, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    if (iterator % 60 === 0) {
        pipes.push({x: canvas.width, y: Math.floor(Math.random() * 500 + 750), w: 300, h: canvas.height});
        pipes.push({x: canvas.width, y: 0, w: 300, h: Math.floor(Math.random() * 500) + 250});
    }
    if (iterator % 120 === 0) {
        pipes.pop();
        pipes.pop();
    }
    for (let i = 0; i < pipes.length; i++) {
        pipes[i].x += pipeDx;
        ctx.fillStyle = pipeColor;
        ctx.fillRect(pipes[i].x, pipes[i].y, pipes[i].w, pipes[i].h);

        if ((ballY + 50 > pipes[i].y && ballY + 50 < pipes[i].y + pipes[i].h ||
            ballY - 50 > pipes[i].y && ballY - 50 < pipes[i].y + pipes[i].h) &&
            Math.abs(pipes[i].x - 300) < 100) {
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
    ballY = Math.max(ballY + vel, 0);
    vel = Math.min( vel + gravity, 75);
    iterator++;
}

function keyPush(event) {
    vel = Math.max(-100, vel -50);
}