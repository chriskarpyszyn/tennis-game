const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 87;

const DEAD_ZONE = 43;

var paddle1Height = PADDLE_HEIGHT;
var paddle2Height = PADDLE_HEIGHT;

var paddle1X = 0;
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
    colorRect(paddle1X, paddle1Y, PADDLE_WIDTH, paddle1Height, "#FFFFFF");
    colorRect(canvas.width - PADDLE_WIDTH, paddle2Y, PADDLE_WIDTH, paddle2Height, "#FFFFFF");
}