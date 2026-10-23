"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Mamifero_1 = require("./Mamifero");
//usando a palavra extends informamos que a classe Cachorro
// herda a classe mamifero tudo que ela tem o cachorro tambem tem 
class Cachorro extends Mamifero_1.Mamifero {
    raca;
    constructor(raca, nome, patas, pelo) {
        //super vem de superclass que é a classe PAI/MAIN 
        //super nada mais é doque o constructor da class PAI
        super(nome, patas, pelo);
        this.raca = raca; //ele criou this.raca porque o raca só tem aqui o nome patas e pelo
        // ele puxou la do mamifero 
    }
    correr() {
        console.log(`${this.getnome()} está correndo com suas${this.patas}.`);
    }
}
exports.Cachorro = Cachorro;
//PRIVATE-> so a propria classe pode acessar diretamente usando 'this.atributo'. o 
//restante precisa usar 'getatributo' ou 'setatributo'
// PUBLIC-> qualquer um poder acessar e modificar diretamente. não precisa de getters ou setters 
//PROTECTED-> tanto a classe pai quanto a classe filhas podem acessar diretamente.o
//restante precisa usar 'getatributo' ou 'setatributo'
