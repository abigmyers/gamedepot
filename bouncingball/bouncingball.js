let canvas;
let context;
let ball = {x: 125, y: 150, size: 100};
let yVel = 15;
let xVel = -10;
let gravity = 5;
let backgroundColor = "#d3d3d3"
let ballColor = "#fa5d6a";

function start(document) {
    canvas = document.getElementById("screen");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    context = canvas.getContext("2d");
    document.addEventListener('click', checkClick);
    setInterval(bounce, 1000 / 30);
}

function bounce() {
    context.fillStyle = backgroundColor;
    context.fillRect(0,0, canvas.width, canvas.height);

    context.beginPath();
    context.fillStyle = ballColor;
    context.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    if (ball.y + ball.size >= canvas.height) {
        yVel = -.95*yVel;
    }

    if (ball.x + ball.size >= canvas.width || ball.x - ball.size < 0) {
        xVel = -xVel;
    }

    ball.x += xVel;
    ball.y += yVel;
    yVel += gravity;

}

function checkClick(event) {
    if (Math.abs(event.clientX - ball.x) < ball.size && Math.abs(event.clientY - ball.y) < ball.size) {
        const hrefs = [
            "../2048/2048.html",
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