
var LivingCreature = require("./LivingCreature")
module.exports = class Xotaker extends LivingCreature {
        constructor(x, y){
            super(x, y);
            this.energy = 4;
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
        if (empty && this.energy > 10 && weather != "ashun" && weather != "dzmer") {
            xotakerQanakStart++;
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY)
            xotakerArr.push(xt)
        }
    }

    move() {
        var array = this.chooseCell(0)
        var empty = array[Math.floor(Math.random() * array.length)];
        this.energy--;
        if (empty && weather != "dzmer") {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var array = this.chooseCell(1)
        var food = array[Math.floor(Math.random() * array.length)];
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
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
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
    }
}