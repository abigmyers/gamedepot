let finalSet = [[], [], [], [], []];
let userSet = [[], [], [], [], []];
let countEqual = 0;

function generate() {
    var set = [[], [], [], [], []];
    var hold = [[], [], [], [], []];
    var row = [[], [], [], [], []];
    var column = [[], [], [], [], []];
    for(var i = 0; i < 5; i++){
        for(var k = 0; k < 5; k++){
            set[i][k] = (Math.floor(Math.random() * 2));
        }
    }

    var h = 0;
    var count = 0;
    for(var k = 0; k < 5; k++){
        for(var i = 0; i < 5; i++){
            if(set[k][i] == 1){
                count++;
            }
            if(set[k][i] == 0 & count > 0){
                row[k][h] = count;
                h++;
                count = 0;
            }
            if(i == 4 && count > 0){
                row[k][h] = count;
                h++;
            }
        }
        count = 0;
        h = 0;
    }

    document.getElementById("side1").innerHTML = row[0];
    document.getElementById("side2").innerHTML = row[1];
    document.getElementById("side3").innerHTML = row[2];
    document.getElementById("side4").innerHTML = row[3];
    document.getElementById("side5").innerHTML = row[4];

    count = 0;
    for(var a = 0; a < set.length; a++){
        for(var b = 0; b < set.length; b++){
           hold[a][b] = set[b][a];
        }
    }

    h = 0;
    count = 0;
    for(var k = 0; k < 5; k++){
        for(var i = 0; i < 5; i++){
            if(hold[k][i] == 1){
                count++;
            }
            if(hold[k][i] == 0 & count > 0){
                column[k][h] = count;
                h++;
                count = 0;
            }
            if(i == 4 && count > 0){
                column[k][h] = count;
                h++;
            }
        }
        count = 0;
        h = 0;
    }

    document.getElementById("top1").innerHTML = column[0];
    document.getElementById("top2").innerHTML = column[1];
    document.getElementById("top3").innerHTML = column[2];
    document.getElementById("top4").innerHTML = column[3];
    document.getElementById("top5").innerHTML = column[4];

    finalSet = set;
}

function mark(id){
    var first = id[0];
    var second = id[2];
    if(document.getElementById(id).innerHTML == "X"){
        document.getElementById(id).innerHTML = "";
        userSet[first][second] = 0;
    }
    else{
        document.getElementById(id).innerHTML = "X";
        document.getElementById(id).style.fontSize = "20px";
        userSet[first][second] = 1;
    }
}

function check(){
    for(var j = 0; j < 5; j++){
        for(var k = 0; k < 5; k++){
            if(userSet[j][k] != 0 && userSet[j][k] != 1){
                userSet[j][k] = 0;
            }
        }
    }

    for(var a = 0; a < 5; a++){
        for(var b = 0; b < 5; b++){
            if(userSet[a][b] == finalSet[a][b]){
                countEqual++;
            }
        }
    }

    if(countEqual == 25){
        document.getElementById("bean").src = "WIN.png";

    } else{
        document.getElementById("bean").src = "you-lose-banner-sm-@x2.png";
    }

    newGame();
    
}

const newGame = () => {
    const hrefs = [
        "../snake/snake.html",
        "../bouncingball/bouncingball.html",
        "../bouncingballcursed/bouncingballc.html",
        "../clickthespot/clickthespot.html",
        "../cursed/cursed.html",
        "../rickroll/rick.html",
        "../rockpaperscissors/rps.html",
        "../rockpaperscissorscursed/rpsc.html",
        "../snakecursed/snakec.html",
        "../tictactoe/ttt.html",
        "../tictactoecursed/tttc.html"
    ];

    let randomNumber = Math.floor(Math.random() * hrefs.length);
    console.log(randomNumber);
    var nextGame = hrefs[randomNumber];
    console.log(nextGame);

    window.location.href = nextGame;
}