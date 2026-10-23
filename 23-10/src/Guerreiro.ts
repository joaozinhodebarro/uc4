
import { Personagem } from "./Personagem"

export class Guerreiro extends Personagem {
    armadura: string

    constructor(nome: string, armadura: string) {
        super(nome)
        this.armadura = armadura
    }

    usarEscudo(): void {
        console.log(`${this.nome} usou o escudo para se defender`)
    }
}
