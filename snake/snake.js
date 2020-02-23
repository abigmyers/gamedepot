let tileCount = 60;
let gridSize;
let headX = 30;
let headY = 30;
let appleX = 40;
let appleY = 40;
let xVel = 1;
let yVel = 0;
let trail = [];
let tail = 5;
let canvas;
let context;

function startGame(document) {
    canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    gridSize = Math.min(Math.floor(canvas.width / tileCount), Math.floor(canvas.height / tileCount));
    context = canvas.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(loopGame, 1000 / 20);
}

function loopGame() {
    headX += xVel;
    headY += yVel;

    if (headX < 0) {
        headX = tileCount - 1;
    }

    if (headY < 0) {
        headY = tileCount - 1;
    }

    if (headX > tileCount - 1) {
        headX = 0;
    }

    if (headY > tileCount - 1) {
        headY = 0;
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "lime";
    for (let i = 0; i < trail.length; i++) {
        context.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize - 2, gridSize - 2);
        if (trail[i].x === headX && trail[i].y === headY) {
            tail = 5;
        }
    }
    trail.push({x: headX, y: headY});
    while (trail.length > tail) {
        trail.shift();
    }

    if (headX === appleX && headY === appleY) {
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tail += 2;
    }

    context.fillStyle = "red";
    context.fillRect(appleX * gridSize, appleY * gridSize, gridSize - 2, gridSize - 2);

    if (tail > 30) {
        const hrefs = [
            "../rockpaperscissors/rps.html",
            "../rickroll/rick.html",
            "../clickthespot/clickthespot.html"
        ];

        let randomNumber = Math.floor(Math.random() * hrefs.length);
        var nextGame = hrefs[randomNumber];

        window.location.href = nextGame;
    }
}

function keyPush(event) {
    switch (event.keyCode) {
        case 37: case 65:
            xVel = -1;
            yVel = 0;
            break;

        case 38: case 87:
            xVel = 0;
            yVel = -1;
            break;

        case 39: case 68:
            xVel = 1;
            yVel = 0;
            break;

        case 40: case 83:
            xVel = 0;
            yVel = 1;
            break;
    }
}