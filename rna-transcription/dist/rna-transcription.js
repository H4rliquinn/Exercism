"use strict";
exports.__esModule = true;
function isDNA(a) {
    return (a == "G" || a == "C" || a == "T" || a == "A");
}
var Transcriptor = /** @class */ (function () {
    function Transcriptor() {
    }
    Transcriptor.prototype.toRna = function (dna) {
        var retVal = "";
        var complements = {
            'G': 'C',
            'C': 'G',
            'T': 'A',
            'A': 'U'
        };
        for (var _i = 0, dna_1 = dna; _i < dna_1.length; _i++) {
            var char = dna_1[_i];
            if (isDNA(char)) {
                retVal += complements[char];
            }
            else {
                throw new Error("Invalid input DNA.");
            }
        }
        return retVal;
    };
    return Transcriptor;
}());
exports["default"] = Transcriptor;
