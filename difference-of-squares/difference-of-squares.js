"use strict";
class Squares {
    constructor(num = 0) {
        this.num = num;
        this.sum = 0;
        this.sqares = 0;
        this.diff = 0;
        if (num > 0) {
            for (let x = 1; x <= num; x++) {
                console.log(x);
            }
        }
    }
    squareOfSum() {
    }
    sumOfSquares() {
    }
    difference() {
    }
}
const squares = new Squares(5);
