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
let backColor;
let manColor;
let appleColor;

function startGame(document) {
    chooseColor();
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

    context.fillStyle = backColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = manColor;
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

    context.fillStyle = appleColor;
    context.fillRect(appleX * gridSize, appleY * gridSize, gridSize - 2, gridSize - 2);

    if (tail > 30) {
        const hrefs = [
            "../rockpaperscissors/rps.html",
            "../snake/snake.html",
            "../rockpaperscissorscursed/rpsc.html",
            "../tictactoe/ttt.html",
            "../tictactoecursed/tttc.html",
            "../rickroll/rick.html",
            "../clickthespot/clickthespot.html",
            "../bouncingball.html"
        ];

        let randomNumber = Math.floor(Math.random() * hrefs.length);
        console.log(randomNumber);
        var nextGame = hrefs[randomNumber];
        console.log(nextGame);

        window.location.href = nextGame;
    }
}

function keyPush(event) {
    switch (event.keyCode) {
        case 37:
            xVel = -1;
            yVel = 0;
            break;

        case 38:
            xVel = 0;
            yVel = -1;
            break;

        case 39:
            xVel = 1;
            yVel = 0;
            break;

        case 40:
            xVel = 0;
            yVel = 1;
            break;
    }
}

function chooseColor(){
    var whatColor = Math.floor(Math.random() * 5);

    if(whatColor == 1){
        backColor = "#E82E47";
        manColor = "#E3001E";
        appleColor = "#A30016";
    } else if(whatColor == 2){
        backColor = "#D359FF";
        manColor = "#BE0DFF";
        appleColor = "#990BCC";
    } else if(whatColor == 3){
        backColor = "#FFEA4D";
        manColor = "#FFE100";
        appleColor = "#D1BA00";
    } else if(whatColor == 4){
        backColor = "#4DFFBE";
        manColor = "#00FFA2";
        appleColor = "#00D184";
    } else{
        backColor = "#2E2EE8";
        manColor = "#0000E3";
        appleColor = "#0000A3";
    }
}