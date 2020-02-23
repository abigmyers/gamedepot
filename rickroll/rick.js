function next() {
    const hrefs = [
        "../rockpaperscissors/rps.html",
        "../snake/snake.html",
        "../clickthespot/clickthespot.html"
    ];

    let randomNumber = Math.floor(Math.random() * hrefs.length);
    var nextGame = hrefs[randomNumber];

    window.location.href = nextGame;
}