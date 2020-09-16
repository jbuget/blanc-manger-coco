import {Entity} from './Entity';
import {Player} from './Player';
import {Question} from './Question';
import {Answer} from './Answer';

export class Round extends Entity {
  startDate: Date;
  //endDate: Date;
  leader: Player;
  question: Question;
  //winner: Player;
  answers: Answer[];

  constructor(leader: Player, question: Question) {
    super();
    this.startDate = new Date();
    this.leader = leader;
    this.question = question;
    this.answers = [];
  }

  display() {
    console.log(`id = ${this.id}`);
    console.log(`startDate = ${this.startDate}`);
    //console.log(`endDate = ${this.endDate}`);

    console.log('leader = {');
    this.leader.display();
    console.log(`}`);

    console.log('question = {');
    this.question.display();
    console.log(`}`);

    console.log(`answers = [`);
    this.answers.forEach(answer => {
      answer.display();
    })
    console.log(`]`);
  }
}
