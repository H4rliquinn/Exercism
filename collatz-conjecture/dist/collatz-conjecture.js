"use strict";
exports.__esModule = true;
var CollatzConjecture = /** @class */ (function () {
    function CollatzConjecture() {
    }
    CollatzConjecture.steps = function (num) {
        var curVal = num;
        var count = 0;
        if (curVal < 2) {
            return count;
        }
        while (curVal != 1) {
            if (curVal % 2 == 0) {
                curVal /= 2;
            }
            else {
                curVal = (curVal * 3) + 1;
            }
            count++;
        }
        return count;
    };
    return CollatzConjecture;
}());
exports["default"] = CollatzConjecture;
