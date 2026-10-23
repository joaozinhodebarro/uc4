"use strict";
// essa classe vai ser a classe PAI main 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
class Mamifero {
    nome;
    patas; // atributos
    pelo;
    constructor(nome, patas, pelo) {
        this.nome = nome;
        this.patas = patas; //construtor
        this.pelo = pelo;
    }
    fazerSom() {
        console.log(`${this.nome} está fazendo um barulho.`);
    }
    getnome() {
        return this.nome;
    }
    setnome(novonome) {
        this.nome = novonome;
    }
}
exports.Mamifero = Mamifero;
