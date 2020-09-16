import {Entity} from './Entity';
import {Answer} from './Answer';
import {Question} from './Question';

export class Pack extends Entity {
  title: string;
  releaseDate: Date;
  questions: Question[];
  answers: Answer[];

  constructor(title: string, releaseDate: Date, questions: Question[], answers: Answer[]) {
    super();
    this.title = title;
    this.releaseDate = releaseDate;
    this.questions = questions;
    this.answers = answers;
  }

  static toujoursPlusTrash(): Pack {
    const title = 'Toujours plus trash';
    const releaseDate = new Date('2020-09-16T00:00:00');
    const questions = [
      new Question('Il ne faut pas confondre ___ et ___'),
      new Question('Avec de la volonté, tout finit par passer. Même ___'),
      new Question('___ et hop ! ca vient.'),
      new Question('L’avantage de ___, c’est que ça touche tout le monde.'),
      new Question('Mon mari m’a demandé de choisir entre lui et ____. Il m’arrive de repenser à lui parfois.'),
    ]
    const answers = [
      new Answer('un bukkake'),
      new Answer('faire semblant de s’aimer'),
      new Answer('la sextape d’un footballeur'),
      new Answer('une chanson d’Aya Nakamura'),
      new Answer('une greffe de cerveau'),
      new Answer('le dark Web'),
      new Answer('faire l’étoile de mer'),
      new Answer('un mariage forcé à 12 ans'),
      new Answer('du lubrifiant senteur fraise'),
      new Answer('une érection gênante'),
    ];
    return new Pack(title, releaseDate, questions, answers);
  }
}
