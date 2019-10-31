const Player = require('./player');
type Player = InstanceType<typeof Player>

class Game{

    player1: Player;
    player2: Player;
    
    constructor(){
    }
    setPlayer(n: number){
        n === 1 ? this.player1 = new Player(1) : this.player2 = new Player(2);
    }
}

export = Game;