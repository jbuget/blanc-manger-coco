import {Entity} from './Entity';
import {Game} from './Game';
import {Pack} from './Pack';
import {Account} from './Account';

export class Visitor extends Entity {

  account: Account;

  constructor(account: Account) {
    super();
    this.account = account;
  }

  createAGame(nbPlayers: number): Game {
    const pack = Pack.toujoursPlusTrash();
    const game: Game = new Game(this, pack, nbPlayers);
    return game;
  }

  joinAGame(game: Game) {
    game.addPlayer(this);
  }

}
