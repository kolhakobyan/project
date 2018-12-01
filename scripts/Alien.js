class Alien extends LivingCreature {
    constructor(x, y){
        super(x, y);
        this.energy = 3;
    }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }

// class Alien {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.energy = 3;
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]

//         ]
//     }

//     getNewDirections() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ]
//     }


//     chooseCell(character) {
//         this.getNewDirections()
//         var found = []
//         for (var i in this.directions) {
//             var x = this.directions[i][0]
//             var y = this.directions[i][1]
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i])
//                 }
//             }

//         }
//         return found;
//     }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            var al = new Alien(newX, newY)
            alienArr.push(al)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        // var food = random(this.chooseCell(2))
        var food1 = random(this.chooseCell(3))
        var food2 = random(this.chooseCell(4))
        // if (food) {
        //     var newX = food[0]
        //     var newY = food[1]
        //     matrix[newY][newX] = 5
        //     matrix[this.y][this.x] = 0

        //     for (var i in xotakerArr) {
        //         if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
        //             xotakerArr.splice(i, 1)
        //         }
        //     }

        //     this.x = newX
        //     this.y = newY
        //     this.energy += 2
        // }
        if (food1) {
            var newX = food1[0]
            var newY = food1[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
        if (food2) {
            var newX = food2[0]
            var newY = food2[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            for (var i in vorsordArr) {
                if (vorsordArr[i].x == newX && vorsordArr[i].y == newY) {
                    vorsordArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }


    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in alienArr) {
                if (alienArr[i].x == this.x && alienArr[i].y == this.y) {
                    alienArr.splice(i, 1)
                }
            }
        }
    }


}