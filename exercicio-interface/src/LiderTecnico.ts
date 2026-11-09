
import type { ITrabalhador } from "./interface/ITrabalhador";
import type { IProgramador } from "./interface/IProgramador";
import type { IGerente } from "./interface/IGerente";

export class LiderTecnico implements ITrabalhador, IProgramador, IGerente {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    trabalhar(): void {
        console.log(`${this.nome} está trabalhando`);
    }

    programar(): void {
        console.log(`${this.nome} está programando`);
    }

    gerenciar(): void {
        console.log(`${this.nome} está gerenciando a equipe`);
    }
}
