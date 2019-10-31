import express = require('express');
import socketio = require('socket.io');
import path = require('path');
import Game = require('./game/game');

const app: express.Application = express();

const game: Game = new Game();

const APP_PORT = 3000;

app.get('/player1', (req, res) => {
	res.sendFile(path.resolve(__dirname + "/../public/player1.html"));
	game.setPlayer(1);
})

app.get('/player2', (req, res) => {
	res.sendFile(path.resolve(__dirname + "/../public/player2.html"));
	game.setPlayer(2);
})

const server = app.listen(APP_PORT, () => {
	console.log(`up on ${APP_PORT}`);
})

const io: socketio.Server = socketio(server);

io.on('connection', socket => {

	setInterval(() => socket.emit("draw",  game ), 50	)
	

	socket.on("setPlayer", (n) => {
		game.setPlayer(n);
	})
	socket.on("ArrowDown", (player) => {
		player === 1 ? game.player1.moveDown() : game.player2.moveDown();
	})
	socket.on("ArrowUp", (player) => {
		player === 1 ? game.player1.moveUp() : game.player2.moveUp();
	})
})


