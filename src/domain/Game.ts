import {Entity} from './Entity';
import {Visitor} from './Visitor';
import {Deck} from './Deck';
import {Answer} from './Answer';
import {GameStatus} from './GameStatus';
import {Pack} from './Pack';
import {Player} from './Player';
import {Round} from './Round';
import {Question} from './Question';
import {Chance} from './Chance';

export class Game extends Entity {
  creationDate: Date;
  status: GameStatus;
  creator: Visitor;
  pack: Pack;
  nbPlayers: number;
  players: Player[] = [];
  rounds: Round[] = [];
  questionsDeck: Deck<Question>;
  answersDeck: Deck<Answer>;

  constructor(creator: Visitor, pack: Pack, nbPlayers: number) {
    super();
    this.creationDate = new Date();
    this.status = GameStatus.WAITING_FOR_PLAYERS;
    this.creator = creator;
    this.pack = pack;
    this.nbPlayers = nbPlayers;
    this.players = [];
    this.questionsDeck = new Deck(pack.questions);
    this.answersDeck = new Deck(pack.answers);
    this.addPlayer(creator);
  }

  addPlayer({account}: Visitor) {
    this.players.forEach((player) => {
      if (player.account.id === account.id) {
        throw new Error('Player can not be added because it has already been added to this game');
      }
    })
    if (this.players.length >= this.nbPlayers) {
      throw new Error(`Player can not be added because number of players limit has already been reached`);
    }
    const player: Player = new Player(account);
    this.players.push(player);
    if (this.players.length >= this.nbPlayers) {
      this.status = GameStatus.READY_TO_START;
    }
  }

  start() {
    if (this.status !== GameStatus.READY_TO_START) {
      throw new Error(`Game can not start because of wrong status "${this.status}"`);
    }
    if (this.players.length !== this.nbPlayers) {
      // Obligé de rajouter ce test si jamais un joueur a abandonné la partie entre-temps, avant même qu'elle ne débute
      throw new Error(`Game can not start because of missing players`);
    }
    this.questionsDeck.shuffle();
    this.answersDeck.shuffle();

    this.players.forEach((player) => {
      const answers: Answer[] = [];
      for (let i = 0; i < 5; i++) {
        const answer: Answer | undefined = this.answersDeck.getTopCard()
        if (answer) {
          answers.push(answer);
        }
      }
      player.receiveAnswers(answers);
    });
    const leader: Player = Chance.decideFirstRoundLeader(this);
    const question: Question | undefined = this.questionsDeck.getTopCard();
    if (!question) {
      throw new Error('There is no question in the deck');
    }
    const firstRound = new Round(leader, question);
    this.rounds.push(firstRound);
  }

  getCurrentRound(): Round {
    return this.rounds[this.rounds.length - 1];
  }
}
