const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 99;

const DEAD_ZONE = 45;

var paddle1Height = PADDLE_HEIGHT;
var paddle2Height = PADDLE_HEIGHT;

const PADDLE_MARGIN = 100;

var paddle1X = 0 + PADDLE_MARGIN;
var paddle2X = (1000 - PADDLE_WIDTH) - PADDLE_MARGIN;
var paddle1Y = 250;
var paddle2Y = 250;

const PADDLE_COMPUTER_MOVE_SPEED = 3;


function moveComputerPaddle() {
    var paddle2Center = paddle2Y + paddle2Height / 2;

    if (ballY > paddle2Center + DEAD_ZONE) {
        paddle2Y += PADDLE_COMPUTER_MOVE_SPEED;
    }
    if (ballY < paddle2Center - DEAD_ZONE) {
        paddle2Y -= PADDLE_COMPUTER_MOVE_SPEED;
    }
}

function movePaddle() {
    moveComputerPaddle();
}

function drawPaddle() {
    //colorRect(paddle1X, paddle1Y, PADDLE_WIDTH, paddle1Height, "#FFFFFF");
    //colorRect(canvas.width - PADDLE_WIDTH, paddle2Y, PADDLE_WIDTH, paddle2Height, "#FFFFFF");
    drawBitmapCenteredAtLocationWithRotation(paddleLeftPic, paddle1X+(PADDLE_WIDTH/2), paddle1Y+(PADDLE_HEIGHT/2), 0);
    drawBitmapCenteredAtLocationWithRotation(paddleRightPic, paddle2X+(PADDLE_WIDTH/2), paddle2Y+(PADDLE_HEIGHT/2), 0);
}