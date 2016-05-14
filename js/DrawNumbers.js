var length = 50;
var depth = 5;
var color = "White";
var offset = length - depth;

function drawNumberRect(x, y, pos) {


    switch (pos) {
        case 1:
            colorRect(x, y, length, depth, color);
            break;
        case 2:
            colorRect(x, y, depth, length, color);
            break;
        case 3:
            colorRect(x + offset, y, depth, length, color);
            break;
        case 4:
            colorRect(x, y + offset, length, depth, color);
            break;
        case 5:
            colorRect(x, y + offset, depth, length, color);
            break;
        case 6:
            colorRect(x + offset, y + offset, depth, length, color);
            break;
        case 7:
            colorRect(x, y + offset * 2, length, depth, color);
            break;
        default:
    }
}

function drawNumber(x,y,num) {
    switch (num) {
    
        case 1:
            drawOne(x,y);
            break;
        case 2:
            drawTwo(x, y);
            break;
        case 3:
            drawThree(x, y);
            break;
        case 4:
            drawFour(x, y);
            break;
        case 5:
            drawFive(x, y);
            break;
        case 6:
            drawSix(x, y);
            break;
        case 7:
            drawSeven(x, y);
            break;
        case 8:
            drawEight(x, y);
            break;
        case 9:
            drawNine(x, y);
            break;
        case 10:
            drawOne(x, y);
            drawZero(x + length, y);
            break;
        case 11:
            drawOne(x, y);
            drawOne(x + length, y);
            break;
        case 12:
            drawOne(x, y);
            drawTwo(x + length, y);
            break;
        default:
            drawZero(x, y);
    }
}

function drawNumberBox(x, y) {
    colorRect(x, y, length*2, length*2, "pink");

}

function drawZero(x, y) {
    drawNumberRect(x, y, 1);
    drawNumberRect(x, y, 2);
    drawNumberRect(x, y, 3);
    drawNumberRect(x, y, 5);
    drawNumberRect(x, y, 6);
    drawNumberRect(x, y, 7);
}

function drawOne(x, y) {
    drawNumberRect(x, y, 2);
    drawNumberRect(x, y, 5);
}

function drawTwo(x, y) {
    drawNumberRect(x, y, 1);
    drawNumberRect(x, y, 3);
    drawNumberRect(x, y, 4);
    drawNumberRect(x, y, 5);
    drawNumberRect(x, y, 7);
}

function drawThree(x, y) {
    drawNumberRect(x, y, 1);
    drawNumberRect(x, y, 3);
    drawNumberRect(x, y, 4);
    drawNumberRect(x, y, 6);
    drawNumberRect(x, y, 7);
}

function drawFour(x, y) {
    drawNumberRect(x, y, 2);
    drawNumberRect(x, y, 3);
    drawNumberRect(x, y, 4);
    drawNumberRect(x, y, 6);
}

function drawFive(x,y) {
    drawNumberRect(x, y, 1);
    drawNumberRect(x, y, 2);
    drawNumberRect(x, y, 4);
    drawNumberRect(x, y, 6);
    drawNumberRect(x, y, 7);
}

function drawSix(x, y) {
    drawNumberRect(x, y, 2);
    drawNumberRect(x, y, 4);
    drawNumberRect(x, y, 5);
    drawNumberRect(x, y, 6);
    drawNumberRect(x, y, 7);
}

function drawSeven(x, y) {
    drawNumberRect(x, y, 1);
    drawNumberRect(x, y, 3);
    drawNumberRect(x, y, 6);
}

function drawEight(x, y) {
    drawNumberRect(x, y, 1);
    drawNumberRect(x, y, 2);
    drawNumberRect(x, y, 3);
    drawNumberRect(x, y, 4);
    drawNumberRect(x, y, 5);
    drawNumberRect(x, y, 6);
    drawNumberRect(x, y, 7);
}

function drawNine(x, y) {
    drawNumberRect(x, y, 1);
    drawNumberRect(x, y, 2);
    drawNumberRect(x, y, 3);
    drawNumberRect(x, y, 4);
    drawNumberRect(x, y, 6);
}

