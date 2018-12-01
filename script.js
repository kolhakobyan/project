

// var matrix = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 4, 4, 3, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 0, 0, 0],
//     [0, 0, 0, 3, 3, 2, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 2, 0, 0, 0],
//     [0, 0, 0, 3, 2, 2, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 3, 2, 2, 5, 5, 2, 2, 3, 3, 0, 0, 2, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 3, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 0, 0, 3, 3, 0, 0, 1, 0],
//     [0, 0, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 2, 2, 0, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 4, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0]
// ]


// var m=Math.round((Math.random()*40)+5)
// var n=Math.round((Math.random()*40)+5)
//  var matrix=[]
//  var side=10
//  function getRandInt(max){
//    return Math.round(Math.random()*Math.floor(max))
//  }
//  for(var y = 0; y < m; y++){
//  	matrix[y]=[]
//    for(var x = 0; x <n; x++){
       


      

//  			matrix[y].push(getRandInt(6))
			 
			
 			
 			
	
//  	}
//  }console.log(matrix)

var n = 60 
var m = 50

var elem = [0,1,2,3,4,5];


var matrix = [];


for (var i = 0; i < n; i++) {
        matrix.push([])
        for (var j = 0; j< m; j++) {
                 matrix[i].push(0); 
                
        }

}



for (var i = 0; i < n; i++) {

         for (var j = 0; j< m; j++) {
                  var r = Math.round(Math.random()* 5); 
                  matrix[i][j]=elem[r]
                  
                 
         }
 
 }




var side = 10;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var vorsordArr = [];
var alienArr  = [];


function setup() {
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

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
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



            rect(x * side, y * side, side, side)

            // fill("blue")
            // text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }

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


}

