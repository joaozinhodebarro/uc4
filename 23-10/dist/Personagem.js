"use strict";
//exercicio herança e protected. 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
// crie uma classe chamada Personagem com:
// - os atributos preotected nome: string e protected vida : number :
// -um constructor que recebe o nome e inicie a vida em 100
// - um metodo curar(), que aumente a vida em 10;
// - um metodo mostrarDados(), que exiba o nome e a vida.
// - crie a classe guerreiro que herda de personagem (lembre se de usar o 'extends')
// - crie um atributo 'armadura:string' que mostra o tipo de armadura (exemplo: de ferro ,de ouro)
// - de aço)
// - Crie o constructor:
// - constructor ( armadura:string, vida:number) {
//   super(nome.vida)
//   this.armadura = armadura
// crie o metodo usarEscudo() que retorna uma frase 'fulano usou o escudo para se defender'
class Personagem {
    nome;
    vida = 100;
    constructor(nome) {
        this.nome = nome;
    }
    curar() {
        this.vida += 10;
        if (this.vida > 100) {
            this.vida = 100;
        }
    }
    mostrarDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Vida: ${this.vida}`);
    }
}
exports.Personagem = Personagem;
