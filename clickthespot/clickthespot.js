let canvas;
let context;
let centerX;
let centerY;
let colorFar = "#ff0000";
let colorMidFar = "#ff005f";
let colorMid = "#ff00ff";
let colorMidNear = "#5f00ff";
let colorNear = "#0000ff";

function startClick(document) {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    document.addEventListener('click', update);
    document.addEventListener('click', onClick);
    centerX = Math.floor(Math.random() * canvas.clientWidth);
    centerY = Math.floor(Math.random() * canvas.clientHeight);
}

function update(event) {
    let distX = event.clientX - centerX;
    let distY = event.clientY - centerY;
    let distance = Math.floor(Math.sqrt(distX * distX + distY * distY));
    if (distance > 200) {
        context.fillStyle = colorFar;
    } else if (distance > 150) {
        context.fillStyle = colorMidFar;
    } else if (distance > 100) {
        context.fillStyle = colorMid;
    } else if (distance > 50) {
        context.fillStyle = colorMidNear;
    } else {
        context.fillStyle = colorNear;
    }


    context.fillRect(0, 0, 300, 900);


}

function onClick(event) {
    let distX = event.clientX - centerX;
    let distY = event.clientY - centerY;
    let distance = Math.floor(Math.sqrt(distX * distX + distY * distY));
    if (distance < 25) {
        const hrefs = [
            "../rockpaperscissors/rps.html",
            "../rickroll/rick.html",
            "../snake/snake.html"
        ];

        let randomNumber = Math.floor(Math.random() * hrefs.length);
        console.log(randomNumber);
        var nextGame = hrefs[randomNumber];
        console.log(nextGame);

        window.location.href = nextGame;
    }
}