function colorRect(topLeftX, topRightY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topRightY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function drawText(text, x, y, color, font, textAlign) {
    canvasContext.fillStyle = color;
    canvasContext.font = font;
    canvasContext.textAlign = textAlign;
    canvasContext.fillText(text, x, y);
}