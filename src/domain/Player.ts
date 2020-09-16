import {Entity} from './Entity';
import {Answer} from './Answer';
import {Account} from './Account';

export class Player extends Entity {
  points: number;
  answers: Answer[];
  account: Account;

  constructor(account: Account) {
    super();
    this.points = 0;
    this.answers = [];
    this.account = account;
  }

  drawAnswers(number: number = 1) {

  }

  chooseAnswers(answers: Answer[]) {
    // if  answers.length < 1 => error
  }

  chooseAQuestion() {

  }

  receiveAnswers(answers: Answer[]) {
    this.answers.push(...answers);
  }

  display() {
    console.log(`id = ${this.id}`);
    this.account.display();
    console.log(`points = ${this.points}`);
    console.log(`answers = [`);
    this.answers.forEach(answer => {
      answer.display();
    })
    console.log(`]`);
  }
}
