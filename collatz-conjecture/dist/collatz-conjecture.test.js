"use strict";
exports.__esModule = true;
var collatz_conjecture_1 = require("./collatz-conjecture");
describe('CollatzConjecture', function () {
    it('zero steps for one', function () {
        var expected = 0;
        expect(collatz_conjecture_1["default"].steps(1)).toBe(expected);
    });
    it('divide if even', function () {
        var expected = 4;
        expect(collatz_conjecture_1["default"].steps(16)).toBe(expected);
    });
    it('even and odd steps', function () {
        var expected = 9;
        expect(collatz_conjecture_1["default"].steps(12)).toBe(expected);
    });
    xit('Large number of even and odd steps', function () {
        var expected = 152;
        expect(collatz_conjecture_1["default"].steps(1000000)).toBe(expected);
    });
    xit('zero is an error', function () {
        var expected = 'Only positive numbers are allowed';
        expect(function () { collatz_conjecture_1["default"].steps(0); }).toThrowError(expected);
    });
    xit('negative value is an error', function () {
        var expected = 'Only positive numbers are allowed';
        expect(function () { collatz_conjecture_1["default"].steps(-15); }).toThrowError(expected);
    });
});
