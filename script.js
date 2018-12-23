var side = 10;
var socket = io();
var n = 50
var m = 50
var weather = "garun";

function setup() {
    frameRate(5);
    createCanvas(n * side, m * side);
    background('#acacac');
}

function drawmatrix(matrix) {
    // console.log(matrix);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }

            else if (matrix[y][x] == 3) {
                fill("#ff0000");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("#0000ff");
            }

            else if (matrix[y][x] == 0) {
                if (weather == "garun")
                    fill("#D8F362");
                else if (weather == "amar") {
                    fill("#95F709")
                }
                else if (weather == "ashun") {
                    fill("#F7C94F")
                }
                else if (weather == "dzmer") {
                    fill("#ECF2D2")
                }
            }



            rect(x * side, y * side, side, side)

            // fill("blue")
            // text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }

}

socket.on("matrix", drawmatrix);
socket.on("exanak", function (w) {
    weather = w;
})


