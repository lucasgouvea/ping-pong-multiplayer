"use strict";
var Player = /** @class */ (function () {
    function Player(n, socket) {
        this.y = 100;
        this.n = n;
        this.socket = socket;
    }
    Player.prototype.moveDown = function () {
        this.y += 10;
    };
    Player.prototype.moveUp = function () {
        this.y -= 10;
    };
    return Player;
}());
module.exports = Player;
