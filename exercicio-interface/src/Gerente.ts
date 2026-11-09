import { ITrabalhador } from "./interface/ITrabalhador";
import  { IGerente } from "./interface/IGerente";

export class Gerente implements ITrabalhador, IGerente {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    trabalhar(): void {
        console.log(`${this.nome} está trabalhando`);
    }

    gerenciar(): void {
        console.log(`${this.nome} está gerenciando a equipe`);
    }
}
