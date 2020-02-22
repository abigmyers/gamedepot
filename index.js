const newGame = () => {
    const hrefs = [
        "./rockpaperscissors/rps.html",
        "./snake/snake.html",
        "./tictactoe/ttt.html",
        "./clickthespot/clickthespot.html",
        "./rickroll/rick.html",
        "./rockpaperscissorscursed/rpsc.html"
    ];

    let randomNumber = Math.floor(Math.random() * hrefs.length);
    var nextGame = hrefs[randomNumber];

    window.location.href = nextGame;
}