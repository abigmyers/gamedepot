var currentPath = "";

var o1 = "You put it in your pocket and go to class, but when you get to your classroom, no one is there. Something feels very wrong.";
var c11 = "Go back to your dorm room and nap.";
var c12 = "Take a seat in the classroom anyway.";
var c13 = "Call 911.";

var o11 = "You leave the room and walk back to your dorm. On the walk, you don't see a single person. When you wake up from your nap later, there's still no one there. There will never be anyone there.";
var c111 = "THE END.";

var o12 = "The second you sit in your chair, a man in a suit materializes at the front of the room. He says, \"Give me the stone.\"";
var c121 = "Ask him why he wants the stone.";
var c122 = "Ask him who he is.";
var c123 = "Throw the stone at him and run.";

var o121 = "You ask, \"Why do you want the stone?\" He answers, \"It is the sacred gem of my people. Your kind stole it and hid it here, in... Michigan. Give it back and you will be spared.\"";
var c1211 = "Give him the stone.";
var c1212 = "Don't give him the stone.";

var o1211 = "You pull the stone out of your pocket and walk over to him. He grins in a way that makes you uncomfortable, but you hand it to him and leave. When you get back to your room, your roommate is waiting. You never hear from the man again, but you're grateful that everything is back to normal."
var c12111 = "THE END.";

var o1212 = "You fake like you're about to walk toward him with the stone, but then you turn and run instead. You're barely to the door when you feel a sudden pain, greater than anything you've ever felt, that throws you to the ground. Right before you die, you watch the man take the stone from you and leave.";
var c12121 = "THE END.";

var o122 = "You ask, \"Who are you?\" He answers, \"I am an ancient being from another world and you have our sacred gem. Give it back and you will be spared.\"";
// use c1211 and c1212

var o123 = "You lob the stone at him and he somehow catches it perfectly, milliseconds before it crashes into his skull. He laughs as you run from the room and back to your dorm. The man stays true to his word and spares you, but he does not restore the others. You are doomed to an eternity of solitude.";
var c1231 = "THE END.";

var o13 = "You dial 911 and put the phone to your ear. Suddenly, you feel a slight zap and your phone goes flying out of your hand. \"I wouldn't do that if I were you.\" A man walks up from behind you and tucks a strange-looking weapon into his suit."
var c131 = "Ask who he is and what he wants.";
var c132 = "Throw a math textbook at him.";

var o131 = "You ask, \"Who are you, and what do you want?\" He answers, \"I am an ancient being from another planet, and you have our sacred gem. Hand it over and you will be spared.\"";
// use c1211 and c1212

var o132 = "You pick up your math textbook and whip it at his head, but he swats it aside as though it was a bug. He shakes his head slowly before taking the strange weapon back out and firing at you. You die in great pain mere seconds after he takes the stone from you and leaves.";
var c1321 = "THE END";

var o2 = "You swing your leg back and kick the stone. The second your foot makes contact, your body disentegrates.";
var c21 = "THE END.";

var o3 = "You decide you have no need to keep some strange stone, and you keep walking. Days later, a member of the local rock-collecting club goes missing. Maybe it's a good thing you didn't pick up the stone.";
var c31 = "THE END.";

const next = (choice) => {
    currentPath += choice;

    switch(currentPath) {
        case "1":
            changeText(o1, c11, c12, c13);
            break;
        case "2":
            changeText(o2, c21, "", "");
            break;
        case "3":
            changeText(o3, c31, "", "");
            break;
        case "11":
            changeText(o11, c111, "", "");
            break;
        case "12":
            changeText(o12, c121, c122, c123);
            break;
        case "121":
            changeText(o121, c1211, c1212, "");
            break;
        case "1211":
        case "1221":
        case "1311":
            changeText(o1211, c12111, "", "");
            break;
        case "1212":
        case "1222":
        case "1312":
            changeText(o1212, c12121, "", "");
            break;
        case "122":
            changeText(o122, c1211, c1212, "");
            break;
        case "123":
            changeText(o123, c1231, "", "");
            break;
        case "13":
            changeText(o13, c131, c132, "");
            break;
        case "131":
            changeText(o131, c1211, c1212, "");
            break;
        case "132":
            changeText(o132, c1321, "", "");
            break;
        // ending cases
        case "111":
        case "12121":
        case "12221":
        case "1231":
        case "13121":
        case "1321":
        case "21":
            badEnding();
            break;
        case "12111":
        case "12211":
        case "13111":
        case "31":
            goodEnding();
            break;
    }
}

const changeText = (story, option1, option2, option3) => {
    document.getElementById("story").innerHTML = story;
    document.getElementById("option1").innerHTML = option1;
    document.getElementById("option2").innerHTML = option2;
    document.getElementById("option3").innerHTML = option3;
}

const badEnding = () => {
    var audio = document.getElementById("badAudio");
    audio.play();
    setTimeout(newGame, 4000);
}

const goodEnding = () => {
    var audio = document.getElementById("goodAudio");
    audio.play();
    setTimeout(newGame, 4000);
}

const newGame = () => {
    const hrefs = [
        "../2048/2048.html",
        "../bouncingball/bouncingball.html",
        "../clickthespot/clickthespot.html",
        "../nonogram/nono.html",
        "../ohhi/ohhi.html",
        "../rickroll/rick.html",
        "../rockpaperscissors/rps.html",
        "../rockpaperscissorscursed/rpsc.html",
        "../snake/snake.html",
        "../snakecursed/snakec.html",
        "../sudoku/sudoku.html",
        "../tictactoe/ttt.html",
        "../tictactoecursed/tttc.html"
    ];

    let randomNumber = Math.floor(Math.random() * hrefs.length);
    var nextGame = hrefs[randomNumber];

    window.location.href = nextGame;
}