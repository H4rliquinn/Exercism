"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gigasecond {
    constructor(currentDate) {
        this.currentDate = currentDate;
    }
    date() {
        return new Date(this.currentDate.getTime() + 10 ^ 9);
    }
}
exports.default = Gigasecond;
//# sourceMappingURL=gigasecond.js.map