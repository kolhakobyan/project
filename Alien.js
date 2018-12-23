var LivingCreature = require("./LivingCreature")
module.exports = class Alien extends LivingCreature {
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


    mult() {
        var array = this.chooseCell(0)
        var empty = array[Math.floor(Math.random() * array.length)];
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            var al = new Alien(newX, newY)
            alienArr.push(al)
        }
    }

    move() {
        var array = this.chooseCell(0)
        var empty = array[Math.floor(Math.random() * array.length)];
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
        
        var array = this.chooseCell(3)
        var food1 = array[Math.floor(Math.random() * array.length)];

        var array = this.chooseCell(4)
        var food2 = array[Math.floor(Math.random() * array.length)];
        
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