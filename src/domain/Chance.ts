import {Player} from './Player';
import {Game} from './Game';

export class Chance {

  static decideFirstRoundLeader(game: Game): Player {
    const nbPlayers = game.players.length;
    const leaderIndex = Math.floor(Math.random() * nbPlayers);
    return game.players[leaderIndex];
  }

}

