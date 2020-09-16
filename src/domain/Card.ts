import {Entity} from './Entity';

export abstract class Card extends Entity {
  content: string;

  constructor(content: string) {
    super();
    this.content = content;
  }

  display() {
    console.log(`id = ${this.id}`);
    console.log(`content = ${this.content}`);
  }
}
