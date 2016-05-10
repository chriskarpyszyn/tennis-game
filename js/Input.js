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

function setupMouseEventHandlers() {
    canvas.addEventListener("mousedown", mousedownHandler);
    canvas.addEventListener("mousemove", mousemoveHandler);
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