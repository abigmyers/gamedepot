const newGame = () => {
    const hrefs = [
        "./rockpaperscissors/rps.html",
        "./snake/snake.html",
        "./tictactoe/ttt.html"
    ];

    let randomNumber = Math.floor(Math.random() * hrefs.length);
    var nextGame = hrefs[randomNumber];

    window.location.href = nextGame;
}