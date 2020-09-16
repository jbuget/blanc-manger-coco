import {Visitor} from './domain/Visitor';
import {Account} from './domain/Account';

console.log('Hello world!');

const alice = new Visitor(new Account('Alice'));
const bob = new Visitor(new Account('Bob'));

const game = alice.createAGame(2);
bob.joinAGame(game);

game.start();

const currentRound = game.getCurrentRound();
currentRound.display();

