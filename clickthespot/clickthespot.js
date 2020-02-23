let canvas;
let context;
let centerX;
let centerY;
let backgroundColor = "#d3d3d3";
let colorFar = "#ff0000";
let colorMidFar = "#ff005f";
let colorMid = "#ff00ff";
let colorMidNear = "#5f00ff";
let colorNear = "#0000ff";

function startClick(document) {
    canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    context = canvas.getContext("2d");
    document.addEventListener('click', update);
    document.addEventListener('click', onClick);
    centerX = Math.floor(Math.random() * canvas.width);
    centerY = Math.floor(Math.random() * canvas.height);
}

function update(event) {
    context.fillStyle = backgroundColor;
    context.fillRect(0,0, canvas.width, canvas.height);

    let distX = event.clientX - centerX;
    let distY = event.clientY - centerY;
    let distance = Math.floor(Math.sqrt(distX * distX + distY * distY));
    if (distance > 500) {
        context.fillStyle = colorFar;
    } else if (distance > 250) {
        context.fillStyle = colorMidFar;
    } else if (distance > 125) {
        context.fillStyle = colorMid;
    } else if (distance > 75) {
        context.fillStyle = colorMidNear;
    } else {
        context.fillStyle = colorNear;
    }

    context.fillRect(0, 0, canvas.width, canvas.height);


}

function onClick(event) {
    let distX = event.clientX - centerX;
    let distY = event.clientY - centerY;
    let distance = Math.floor(Math.sqrt(distX * distX + distY * distY));
    if (distance < 25) {
        const hrefs = [
            "../2048/2048.html",
            "../bouncingball/bouncingball.html",
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