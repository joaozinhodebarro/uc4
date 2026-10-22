import { Arma } from "./Arma"

export class Personagem {
    nome: string
    vida: number = 50
    forca: number
    arma: Arma

    constructor(nome: string, forca: number, arma: Arma) {
        this.nome = nome
        this.forca = forca
        this.arma = arma
    }

    curar(): void {
        this.vida += 10

        if (this.vida >= 100) {
            this.vida = 100
        }
    }

    perdervida(dano: number): void {
        this.vida -= dano

        if (this.vida < 0) {
            this.vida = 0
        }
    }

    curarOutroPersonagem(per: Personagem): void {
        per.vida += 10

        if (per.vida > 100) {
            per.vida = 100
        }

        console.log(`O personagem ${per.nome} foi curado por ${this.nome}.`)
    }

    atacar(per: Personagem): void {
        per.vida -= this.arma.ataque

        if (per.vida < 0) {
            per.vida = 0
        }

        console.log(`${this.nome} atacou ${per.nome} com ${this.arma.nome} causando ${this.arma.ataque} de dano.`)
    }
}