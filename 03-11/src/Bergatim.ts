import { Navio } from "./Navio";

export class Bergantim extends Navio{
     constructor(nome: string) {
        super(nome, 20, 100,100, 80, 24);
    }

    public  navegar(): void {
        console.log(
            `${this.nome} aproveita os ventos favoráveis para navegar rapidamente!`
        );
    }

    public atacar(): void {
        console.log(
            `${this.nome} realiza uma sequência rápida de disparos!`
        );
    }
}