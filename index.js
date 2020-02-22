const newGame = () => {
    const hrefs = [
        "./rockpaperscissors/rps.html",
        "./snake/snake.html"
    ];

    let randomNumber = Math.floor(Math.random() * hrefs.length);
    console.log(randomNumber);
    var nextGame = hrefs[randomNumber];
    console.log(nextGame);

    window.location.href = nextGame;
}