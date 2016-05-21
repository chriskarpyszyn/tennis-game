var ballX, ballY;

const FPS_MULTIPLIER = 4;

const MIN_BALL_SPEED_X = 15 / FPS_MULTIPLIER;
const MED_BALL_SPEED_X = 25 / FPS_MULTIPLIER;
const MAX_BALL_SPEED_X = 35 / FPS_MULTIPLIER;
const MED_BALL_SPEED_COUNT = 2;
const MAX_BALL_SPEED_COUNT = 6;

const BALL_SPEED_Y = 7 / FPS_MULTIPLIER;

var ballHitCounter = 0;

const MIN_SPEED_Y = 5 / FPS_MULTIPLIER;
const MAX_SPEED_Y = 15 / FPS_MULTIPLIER;

var ySpeedMultiplier = 0.35 / FPS_MULTIPLIER;
var ballSpeedX = MIN_BALL_SPEED_X;
var ballSpeedY = BALL_SPEED_Y;
var ballArc = 8;

var soundBallBounce = new SoundOverlap("sound/blip");
var soundMiss = new SoundOverlap("sound/miss");

var ballLastPosQueue = [];
var ballLastPosQueueLength = ballArc;

var collisionY1;
var collisionY2;

function moveBall() {
    //right paddle collision
    if (ballX >= paddle2X - PADDLE_WIDTH && ballX < paddle2X && ballSpeedX>0) {
        if (collisionY2 > paddle2Y && collisionY2 < paddle2Y + paddle2Height) {
            ballSpeedX *= -1;
            increaseHitCountAndCheckSpeed();
            var deltaY = ballY - (paddle2Y + paddle2Height / 2);
            ballSpeedY = deltaY * ySpeedMultiplier;
            soundBallBounce.play();
            collisionY1 = calculateAnticipatedY(ballSpeedX, ballSpeedY, ballX, ballY);

        }
    } else if (ballX > canvas.width) {
        player1Score++;
        ballReset();

    }
    //left paddle collision
    if (ballX < paddle1X+PADDLE_WIDTH && ballX > paddle1X && ballSpeedX <0) {
        if (collisionY1 > paddle1Y && collisionY1 < paddle1Y + paddle1Height) {
            ballSpeedX *= -1;
            increaseHitCountAndCheckSpeed();
            //collision test Y
            var deltaY = ballY - (paddle1Y + paddle1Height / 2);
            ballSpeedY = deltaY * ySpeedMultiplier;
            soundBallBounce.play();

            anticipatedY = calculateAnticipatedY(ballSpeedX, ballSpeedY, ballX, ballY);
            collisionY2 = anticipatedY;
            firstShot = false;
        }
    } else if (ballX < 0) {
        player2Score++;
        ballReset();
    }

    if (ballY >= canvas.height) {
        ballSpeedY *= -1;
        anticipatedY = calculateAnticipatedY(ballSpeedX, ballSpeedY, ballX, ballY);
        collisionY1 = anticipatedY;
        collisionY2 = anticipatedY;
    }
    if (ballY <= 0) {
        ballSpeedY *= -1;
        anticipatedY = calculateAnticipatedY(ballSpeedX, ballSpeedY, ballX, ballY);
        collisionY1 = anticipatedY;
        collisionY2 = anticipatedY;
    }

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    ballLastPosQueue.push({ x: ballX, y: ballY });
    ballLastPosQueue.shift();
}

function calculateAnticipatedY(ballSpeedX, ballSpeedY, ballX, ballY) {

    slope = ballSpeedY / ballSpeedX;
    yIntercept = ballY - slope * ballX;
    //towards right paddle
    if (ballSpeedX > 0) {
        return slope * paddle2X + yIntercept;
    } else { //towards left paddle
        return slope * paddle1X + yIntercept;
    }
}



function ballReset() {
    if (player1Score >= MAX_SCORE || player2Score >= MAX_SCORE) {
        showingWinScreen = true;
    }
    soundMiss.play();
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    firstShot = true;

    resetBallLastPosQueue(ballX, ballY);
    ballSpeedX *= -1;
    ballHitCounter = 0;
    changeSpeedKeepDirection(MIN_BALL_SPEED_X);

    ballSpeedY = MIN_SPEED_Y + (Math.random() * (MAX_SPEED_Y - MIN_SPEED_Y));
    console.log(ballSpeedY);
    if (Math.random() > 0.5) {
        ballSpeedY *= -1.0;
    }

    collisionY1 = calculateAnticipatedY(ballSpeedX, ballSpeedY, ballX, ballY);
    collisionY2 = calculateAnticipatedY(ballSpeedX, ballSpeedY, ballX, ballY);
}

function initBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;

    collisionY1 = calculateAnticipatedY(ballSpeedX, ballSpeedY, ballX, ballY);
    collisionY2 = collisionY1;

    resetBallLastPosQueue(ballX, ballY);
}

function resetBallLastPosQueue(x, y) {
    for (var i = 0; i < ballLastPosQueueLength; i++) {
        ballLastPosQueue.pop();
    }

    for (var i = 0; i < ballLastPosQueueLength; i++) {
        //ballLastPosQueue[i].x = x;
        //ballLastPosQueue[i].y = y;
        ballLastPosQueue.push({ x: x, y: y });
    }

}

function increaseHitCountAndCheckSpeed() {
    ballHitCounter++;

    if (ballHitCounter === MED_BALL_SPEED_COUNT) {
        changeSpeedKeepDirection(MED_BALL_SPEED_X);
    } else if (ballHitCounter === MAX_BALL_SPEED_COUNT) {
        changeSpeedKeepDirection(MAX_BALL_SPEED_X);
    }
}

function changeSpeedKeepDirection(newBallSpeed) {
    var direction;
    if (ballSpeedX < 0) {
        direction = -1;
    } else {
        direction = 1;
    }

    ballSpeedX = newBallSpeed * direction;
}

function drawBall() {
    //draw a white circle
    //colorCircle(ballX, ballY, ballArc, "#FFFFFF");
    drawBallTail();
    drawBitmapCenteredAtLocationWithRotation(ballPic, ballX, ballY, 0);
}

function drawBallTail() {
    var tailBallArc = ballArc;
    for (var i = ballLastPosQueueLength-1; i >= 0; i--) {
        x = ballLastPosQueue[i].x;
        y = ballLastPosQueue[i].y;

        colorCircle(x, y, tailBallArc, "#FDFFB5");

        if (tailBallArc > 0) {
            tailBallArc--;
        }
    }


}
