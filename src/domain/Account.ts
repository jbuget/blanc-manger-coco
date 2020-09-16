import {Entity} from './Entity';

export class Account extends Entity {
  username: string;

  constructor(username: string) {
    super();
    this.username = username;
  }

  display() {
    console.log(`username = ${this.username}`);
  }
}

