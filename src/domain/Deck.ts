import {Card} from './Card';

export class Deck<T extends Card> {
  cards: T[];

  constructor(cards: T[] = []) {
    this.cards = cards;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  getTopCard(): T | undefined {
    return this.cards.shift();
  }
}
