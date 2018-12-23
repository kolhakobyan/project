
grassArr = [];
xotakerArr = [];
gishatichArr = [];
vorsordArr = [];
alienArr = [];
weather = "garun";

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs")


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);




// function RadInt(min, max){
//     var z = Math.floor(Math.random() * (max - min +1 )) + min;
//     return z;
// }


matrix = [];
var n = 50
var m = 50
for (var i = 0; i <= n; ++i) {
    matrix[i] = [];
}
for (var y = 0; y <= n; y++) {
    for (var x = 0; x <= m; x++) {
        matrix[y][x] = Math.round(Math.random() * 5);
    }
}



io.on('conection', function (socket) {
})

var Grass = require("./Grass")
var Xotaker = require("./Xotaker")
var Gishatich = require("./Gishatich")
var Vorsord = require("./Vorsord")
var Alien = require("./Alien")





for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y)
            grassArr.push(gr)
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerArr.push(xt)
        }

        else if (matrix[y][x] == 3) {
            var gt = new Gishatich(x, y)
            gishatichArr.push(gt)
        }
        else if (matrix[y][x] == 4) {
            var vt = new Vorsord(x, y)
            vorsordArr.push(vt)
        }
        else if (matrix[y][x] == 5) {
            var al = new Alien(x, y)
            alienArr.push(al)
        }

    }



}



function drawurish() {

    for (var i in grassArr) {
        grassArr[i].mult()
    }
    for (var i in xotakerArr) {
        xotakerArr[i].move()
        xotakerArr[i].eat()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in vorsordArr) {
        vorsordArr[i].eat()
        vorsordArr[i].move()
        vorsordArr[i].mult()
        vorsordArr[i].die()
    }
    for (var i in alienArr) {
        alienArr[i].eat()
        alienArr[i].move()
        alienArr[i].mult()
        alienArr[i].die()
    }
    io.sockets.emit("matrix", matrix)
}


function changeWeather() {
    if (weather == "garun") {
        weather = "amar"
    }
    else if (weather == "amar") {
        weather = "ashun"
    }
    else if (weather == "ashun") {
        weather = "dzmer"
    }
    else if (weather == "dzmer") {
        weather = "garun"
    }
    io.sockets.emit("exanak", weather);
}

setInterval(drawurish, 1000);
setInterval(changeWeather, 3000);
setInterval(printStat, 5000);

xotQanakStart = 0;
xotakerQanakStart = 0;
gishatichQanakStart = 0;

var jsonObj = { "info": [] }
function printStat() {
    var file = "stat.json";
    jsonObj.info.push({ "xot qanak": xotQanakStart, "xotaker qanak": xotakerQanakStart, "gishatich qanak": gishatichQanakStart, });
    fs.writeFileSync(file, JSON.stringify(jsonObj));
}


