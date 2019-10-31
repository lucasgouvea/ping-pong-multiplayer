import socketio = require('socket.io');

class Player{
    n: number;
    y: number = 100;
    socket: socketio.Socket;
    constructor(n: number, socket: socketio.Socket){
        this.n = n;
        this.socket = socket;
    }
    
    moveDown(){
        this.y += 10;
    }

    moveUp(){
        this.y -= 10;
    }
}

export = Player;