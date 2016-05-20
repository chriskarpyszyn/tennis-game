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

var p1_keyHeld_up = false;
var p1_keyHeld_down = false;
var p2_keyHeld_up = false;
var p2_keyHeld_down = false;

var slope = 0;
var yIntercept;
var anticipatedY;

var firstShot = true;


const KEYBOARD_PADDLE_SPEED = 5;

const PADDLE_COMPUTER_MOVE_SPEED = 3;


function moveComputerPaddle() {
    var paddle2Center = paddle2Y + paddle2Height / 2;

    //on first shot, just follow ball. on subsequent shots anticipate based on line intercept.
    if (ballSpeedX > 0) {
        if (firstShot) {
            if (ballY > paddle2Center + DEAD_ZONE) {
                paddle2Y += PADDLE_COMPUTER_MOVE_SPEED;
            }
            if (ballY < paddle2Center - DEAD_ZONE) {
                paddle2Y -= PADDLE_COMPUTER_MOVE_SPEED;
            }
        } else if (anticipatedY > 0 || anticipatedY < canvas.height) {

            if (anticipatedY > paddle2Center + DEAD_ZONE) {
                paddle2Y += PADDLE_COMPUTER_MOVE_SPEED;
            }
            if (anticipatedY < paddle2Center - DEAD_ZONE) {
                paddle2Y -= PADDLE_COMPUTER_MOVE_SPEED;
            }
        }
    }

    //return to center when ball is moving away from paddle.
    if (ballSpeedX < 0) {
        if (paddle2Center > canvas.height/2) {
            paddle2Y -= PADDLE_COMPUTER_MOVE_SPEED;
        } else {
            paddle2Y += PADDLE_COMPUTER_MOVE_SPEED;
        }
    }
}

function movePaddle() {
    if (onePlayerMode) {
        moveComputerPaddle();
    } else {
        if (p1_keyHeld_up && paddle1Y >=0) {
            paddle1Y -= KEYBOARD_PADDLE_SPEED;
        }
        if (p1_keyHeld_down && paddle1Y+PADDLE_HEIGHT <= canvas.height) {
            paddle1Y += KEYBOARD_PADDLE_SPEED;
        }
        if (p2_keyHeld_up && paddle2Y >=0) {
            paddle2Y -= KEYBOARD_PADDLE_SPEED;
        }
        if (p2_keyHeld_down && paddle2Y+PADDLE_HEIGHT <= canvas.height) {
            paddle2Y += KEYBOARD_PADDLE_SPEED;
        }
    }
}

function drawPaddle() {
    //colorRect(paddle1X, paddle1Y, PADDLE_WIDTH, paddle1Height, "#FFFFFF");
    //colorRect(canvas.width - PADDLE_WIDTH, paddle2Y, PADDLE_WIDTH, paddle2Height, "#FFFFFF");
    drawBitmapCenteredAtLocationWithRotation(paddleLeftPic, paddle1X+(PADDLE_WIDTH/2), paddle1Y+(PADDLE_HEIGHT/2), 0);
    drawBitmapCenteredAtLocationWithRotation(paddleRightPic, paddle2X+(PADDLE_WIDTH/2), paddle2Y+(PADDLE_HEIGHT/2), 0);
}
