"use strict";
exports.__esModule = true;
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
        return retVal;
    };
    return Transcriptor;
}());
exports["default"] = Transcriptor;
