
import { Poder } from "./Poder";

export class Pokemon {
    nome: string;
    vida: number;
    ataque: number;
    poder: Poder;

    constructor(nome: string, vida: number, ataque: number, poder: Poder) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.poder = poder;
    }

    falar(): void {
        console.log(`${this.nome} `.repeat(3));
    }

    atacar(alvo: Pokemon): void {
        if (alvo.vida > 0) {
            alvo.vida -= this.ataque;

            if (alvo.vida < 0) {
                alvo.vida = 0;
            }

            console.log(`${this.nome} atacou ${alvo.nome} e causou ${this.ataque} de dano!`);
            console.log(`Vida restante de ${alvo.nome}: ${alvo.vida}`);
        } else {
            console.log(`${alvo.nome} já está derrotado!`);
        }
    }

    atacarComPoder(outroPokemon: Pokemon): void {
        if (outroPokemon.vida > 0) {
            console.log(`${this.nome} usou ${this.poder.nome}!`);

            outroPokemon.vida -= this.poder.ataque;

            if (outroPokemon.vida < 0) {
                outroPokemon.vida = 0;
            }

            console.log(`${outroPokemon.nome} perdeu ${this.poder.ataque} de vida!`);
            console.log(`Vida restante: ${outroPokemon.vida}`);
        } else {
            console.log(`${outroPokemon.nome} já está derrotado!`);
        }
    }
}
