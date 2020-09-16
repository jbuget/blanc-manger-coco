export abstract class Entity {
  id: number;

  protected constructor() {
    this.id = Math.round(Math.random() * 1000);
  }
}
