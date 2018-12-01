class Vorsord extends LivingCreature {
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

// class Vorsord {
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
        if (empty && this.energy > 5) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var vt = new Vorsord(newX, newY)
            vorsordArr.push(vt)
        }
    }

    move() {
        var empty = random(this.chooseCell(0) || (3))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var food = random(this.chooseCell(3))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
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
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in vorsordArr) {
                if (vorsordArr[i].x == this.x && vorsordArr[i].y == this.y) {
                    vorsordArr.splice(i, 1)
                }
            }
        }
    }


}