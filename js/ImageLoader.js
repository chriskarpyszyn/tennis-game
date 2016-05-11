var bgPic = document.createElement("img");
var ballPic = document.createElement("img");
var paddleLeftPic = document.createElement("img");
var paddleRightPic = document.createElement("img");

var picsToLoad = 0;

function loadImages() {
    const imageList = [
        { varName: bgPic, fileName: "bg.png" },
        { varName: ballPic, fileName: "ball.png" },
        { varName: paddleLeftPic, fileName: "paddleLeft.png" },
        { varName: paddleRightPic, fileName: "paddleRight.png" }
    ];
    picsToLoad = imageList.length;

    for (let i = 0; i < imageList.length; i++) {
        beginLoadingImage(imageList[i].varName, imageList[i].fileName);
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunch();
    imgVar.src = `images/${fileName}`;
}

function countLoadedImagesAndLaunch() {
    picsToLoad--;
    if (picsToLoad === 0) {
        startGame();
    }
}

