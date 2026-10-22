"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
//toda classe começa com letra maiuscula.
//a palavra 'export' permite que outros aquivos importem e usem esta classe
//a palavra 'classe' inicia a declaração da classe
//depois, colocamos o nome da classe, que deve ser igual ao nome do arquivo seguido de chaves
class Cachorro {
    //todo o codigo de classe vai aqui dentro
    // atributos são as coisas que um cachorro tem
    //são como variaveis, só que sem const e sem let
    nome;
    peso;
    raca;
    //metodos são funçoes. elas são as coisas que o cachorro faz.
    // toda classe precisa de um método especial chamado 'constructor'
    //é ele que recebe os valores de nome, peso, raca, etc... e cria o objeto.
    constructor(meuNome, meuPeso, minhaRaca) {
        this.nome = meuNome;
        this.peso = meuPeso;
        this.raca = minhaRaca;
    }
    latir() {
        console.log(`${this.nome}:au au au`);
    }
    comer() {
        console.log(`${this.nome}:nham nham `);
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=Cachorro.js.map