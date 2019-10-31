"use strict";
var Player = require('./player');
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.setPlayer = function (n) {
        n === 1 ? this.player1 = new Player(1) : this.player2 = new Player(2);
    };
    return Game;
}());
module.exports = Game;
