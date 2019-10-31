"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var socketio = require("socket.io");
var path = require("path");
var Game = require("./game/game");
var app = express();
var game = new Game();
var APP_PORT = 3000;
app.get('/player1', function (req, res) {
    res.sendFile(path.resolve(__dirname + "/../public/player1.html"));
    game.setPlayer(1);
});
app.get('/player2', function (req, res) {
    res.sendFile(path.resolve(__dirname + "/../public/player2.html"));
    game.setPlayer(2);
});
var server = app.listen(APP_PORT, function () {
    console.log("up on " + APP_PORT);
});
var io = socketio(server);
io.on('connection', function (socket) {
    setInterval(function () { return socket.emit("draw", game); }, 50);
    socket.on("setPlayer", function (n) {
        game.setPlayer(n);
    });
    socket.on("ArrowDown", function (player) {
        player === 1 ? game.player1.moveDown() : game.player2.moveDown();
    });
    socket.on("ArrowUp", function (player) {
        player === 1 ? game.player1.moveUp() : game.player2.moveUp();
    });
});
