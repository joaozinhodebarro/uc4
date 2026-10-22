"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    nome;
    vida = 50;
    forca;
    arma;
    constructor(nome, forca, arma) {
        this.nome = nome;
        this.forca = forca;
        this.arma = arma;
    }
    curar() {
        this.vida += 10;
        if (this.vida >= 100) {
            this.vida = 100;
        }
    }
    perdervida(dano) {
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    curarOutroPersonagem(per) {
        per.vida += 10;
        if (per.vida > 100) {
            per.vida = 100;
        }
        console.log(`O personagem ${per.nome} foi curado por ${this.nome}.`);
    }
    atacar(per) {
        per.vida -= this.arma.ataque;
        if (per.vida < 0) {
            per.vida = 0;
        }
        console.log(`${this.nome} atacou ${per.nome} com ${this.arma.nome} causando ${this.arma.ataque} de dano.`);
    }
}
exports.Personagem = Personagem;
