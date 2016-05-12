const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;

const KEY_W_LETTER = 87;
const KEY_S_LETTER = 83;

function keyPressed(evt) {
    setKeyHoldState(evt.keyCode, true);
    evt.preventDefault(); //stops the default behavior of arrow keys
}

function keyReleased(evt) {
    setKeyHoldState(evt.keyCode, false);
}

function setKeyHoldState(keyCode, setTo) {
    //kind of janky since paddle is not a class
    if (keyCode === KEY_UP_ARROW) {
        p1_keyHeld_up = setTo;
    }
    if (keyCode === KEY_DOWN_ARROW) {
        p1_keyHeld_down = setTo;
    }
    if (keyCode === KEY_W_LETTER) {
        p2_keyHeld_up = setTo;
    }
    if (keyCode === KEY_S_LETTER) {
        p2_keyHeld_down = setTo;
    }
}

function mousemoveHandler(evt) {
    var mousePos = calculateMousePos(evt);
    if (onePlayerMode) {
        paddle1Y = mousePos.y - (paddle1Height / 2);
    }

    if (startScreenState) {

        if (checkIfMouseOverPlayer1(mousePos.x, mousePos.y)) {
            mouseOver_Player1 = true;
            mouseOver_Player2 = false;
        } else {
            mouseOver_Player1 = false;
        }

        if (checkIfMouseOverPlayer2(mousePos.x, mousePos.y)) {
            //colorRect(canvas.width/2-70, canvas.height*.40-30, 150, 40, 'pink');
            mouseOver_Player2 = true;
            mouseOver_Player1 = false;
        } else {
            mouseOver_Player2 = false;
        }
    }
}

function mousedownHandler(evt) {
    if (showingWinScreen === true) {
        player1Score = 0;
        player2Score = 0;
        showingWinScreen = false;
    }
    if (startScreenState) {
        var mousePos = calculateMousePos(evt);
        if (checkIfMouseOverPlayer1(mousePos.x, mousePos.y)) {
            onePlayerMode = true;
            startScreenState = false;
        }
        if (checkIfMouseOverPlayer2(mousePos.x, mousePos.y)) {
            onePlayerMode = false;
            startScreenState = false;
        }
    }
}

function initEventHandlers() {
    canvas.addEventListener("mousedown", mousedownHandler);
    canvas.addEventListener("mousemove", mousemoveHandler);
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
}

function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect(), root = document.documentElement;

    //account for margins, canvas position on page, scroll amount
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;

    return {
        x: mouseX,
        y: mouseY
    }
}

function checkIfMouseOverPlayer1(x,y) {
    if (x > canvas.width/2-70 && x < canvas.width/2+80) {
        if (y > canvas.height*.30-30 && y < canvas.height*.30+10) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

function checkIfMouseOverPlayer2(x,y) {
    if (x > canvas.width/2-70 && x < canvas.width/2+80) {
        if (y > canvas.height*.40-30 && y < canvas.height*.40+10) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}
