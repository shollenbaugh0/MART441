var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 60;
var y = 50;
var x2 = 80;
var y2 = 80;
var square1;
var square2;


createSquares();

drawSquare();

setInterval(moveYellowSquare, 2000);


function createSquares() {
    square1 = new Square(x, y, 10, 50, "turquoise");
    square2 = new Square(x2, y2, 40, 40, "yellow");
}

function moveYellowSquare() {

    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();
}

function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
}

$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});


function getKey(event) {


    var didCollide = hasCollided(square1, square2);

    if (didCollide) {

        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        // change the size of the squares
        square1.setWidth(square1.theWidth - 1);
        square1.setHeight(square1.theHeight - 1);
        square2.setWidth(square2.theWidth + 1);
        square2.setHeight(square2.theHeight + 1);
    }

    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }

    drawSquare();
}

function moveUp() {
    square1.setY(square1.theY - 10);
}


function moveDown() {
    square1.setY(square1.theY + 10);
}

function moveLeft() {
    square1.setX(square1.theX - 10);
}

function moveRight() {
    square1.setX(square1.theX + 10);
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
