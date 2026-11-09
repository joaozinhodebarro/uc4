import type { Atacante } from "./Atacante";

export class Mago implements Atacante {
  constructor(public nome: string) {}

  atacar(): void {
    console.log(`${this.nome} lança uma bola de fogo!`);
  }
}