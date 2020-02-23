const newGame = () => {
    const hrefs = [
        "./2048/2048.html",
        "./boingyball/boingyball.html",
        "./bouncingball/bouncingball.html",
        "./clickthespot/clickthespot.html",
        "./nonogram/nono.html",
        "./ohhi/ohhi.html",
        "./rickroll/rick.html",
        "./rockpaperscissors/rps.html",
        "./rockpaperscissorscursed/rpsc.html",
        "./snake/snake.html",
        "./snakecursed/snakec.html",
        "./sudoku/sudoku.html",
        "./textadventure/ta.html",
        "./tictactoe/ttt.html",
        "./tictactoecursed/tttc.html"
    ];

    let randomNumber = Math.floor(Math.random() * hrefs.length);
    var nextGame = hrefs[randomNumber];

    window.location.href = nextGame;
}