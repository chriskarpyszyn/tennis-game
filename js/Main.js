var canvas;
var canvasContext;

const fps = 120;

var player1Score = 0;
var player2Score = 0;
const MAX_SCORE = 11;

var showingWinScreen = false;

window.onload = function () {
    //save the canvas for dimensions and it's 2d context for drawing to it
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");

    setupMouseEventHandlers();
    ballReset();

    setInterval(function () {
        move();
        draw();
    }, 1000 / fps);
}

function move() {
    if (showingWinScreen) {
        return;
    }
    moveBall();
    movePaddle();
}

function draw() {
    //clear game view by filling it with black
    colorRect(0, 0, canvas.width, canvas.height, "#000000");

    //write text      
    drawText(`Player1: ${player1Score}`, 100, 100, "#FFFFFF", "24px Comic Sans MS", 'left');
    drawText(`Player2: ${player2Score}`, canvas.width - 100, 100, "#FFFFFF", "24px Comic Sans MS", 'right');

    ///TODO: Add Start Screen Game State
    if (!showingWinScreen) {
        drawPaddle();
        drawBall();
        drawNet();
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