var LivingCreature = require("./LivingCreature")
module.exports = class Vorsord extends LivingCreature {
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
        if (empty && this.energy > 5) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var vt = new Vorsord(newX, newY)
            vorsordArr.push(vt)
        }
    }

    move() {
        var array = this.chooseCell(0)
        var empty = array[Math.floor(Math.random() * array.length)];
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
        var array = this.chooseCell(3)
        var food = array[Math.floor(Math.random() * array.length)];
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