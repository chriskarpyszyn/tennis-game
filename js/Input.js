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
    paddle1Y = mousePos.y - (paddle1Height / 2);
    //paddle2Y = mousePos.y - (paddle2Height / 2);
}

function mousedownHandler(evt) {
    if (showingWinScreen === true) {
        player1Score = 0;
        player2Score = 0;
        showingWinScreen = false;
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
