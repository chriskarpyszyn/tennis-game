var canvas;
var canvasContext;

const fps = 120;

var player1Score = 0;
var player2Score = 0;
const MAX_SCORE = 12;

var startScreenState = true;
var showingWinScreen = false;

var mouseOver_Player1 = false;
var mouseOver_Player2 = false;

var onePlayerMode = true;

window.onload = function () {
    //save the canvas for dimensions and it's 2d context for drawing to it
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");


    initEventHandlers();
    initBall();

    loadImages();
}

function startGame() {
    setInterval(function () {
        move();
        draw();
    }, 1000 / fps);
}

function move() {
    if (showingWinScreen || startScreenState) {
        return;
    }
    moveBall();
    movePaddle();
}

function draw() {

    if (startScreenState) {
        colorRect(0, 0, canvas.width, canvas.height, "#000000");
        if (mouseOver_Player1) {
            drawText("1 Player", canvas.width/2, canvas.height*.30, "#45D0FF", "30px Comic Sans MS", "center");
        } else {
            drawText("1 Player", canvas.width/2, canvas.height*.30, "#FFFFFF", "30px Comic Sans MS", "center");
        }

        if (mouseOver_Player2) {
            drawText("2 Players", canvas.width/2, canvas.height*.40, "#45D0FF", "30px Comic Sans MS", "center");
        } else {
            drawText("2 Players", canvas.width/2, canvas.height*.40, "#FFFFFF", "30px Comic Sans MS", "center");
        }

        return;
    }



    drawBitmapCenteredAtLocationWithRotation(bgPic, canvas.width / 2, canvas.height / 2, 0);

    //write text
    //drawText(`Player1: ${player1Score}`, 100, 100, "#FFFFFF", "24px Comic Sans MS", 'left');
    //drawText(`Player2: ${player2Score}`, canvas.width - 100, 100, "#FFFFFF", "24px Comic Sans MS", 'right');
    var p1ScoreX = canvas.width / 2 - 200;
    var scoreY = 50;

    var p2ScoreX = canvas.width / 2 + 100;


    drawNumberBox(p1ScoreX, scoreY);
    drawNumberBox(p2ScoreX, scoreY);


    drawNumber(p1ScoreX, scoreY, player1Score);
    drawNumber(p2ScoreX, scoreY, player2Score);

    


    ///TODO: Add Start Screen Game State
    if (!showingWinScreen) {
        drawPaddle();
        drawBall();
        //drawNet();


        

    } else {
        let winText;
        if (player1Score === MAX_SCORE) {
            winText = `Player 1 `;
        } else {
            winText = `Player 2 `;
        }
        drawText(`${winText} Wins!`, (canvas.width / 2), canvas.height / 2, "#FFFFFF", "24px Comic Sans MS", 'center');
        drawText("Click Mouse Button to continue", canvas.width / 2, canvas.height - 50, "#FFFFFF", "16px Comic Sans MS", 'center');
    }
}

function drawNet() {
    for (let i = 0; i <= canvas.height; i += 40) {
        colorRect(canvas.width / 2 - 1, i, 2, 20, "#FFFFFF");
    }
}
