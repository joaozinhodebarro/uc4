"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    marca;
    tipo;
    ano;
    constructor(minhaMarca, meuTipo, meuAno) {
        this.marca = minhaMarca;
        this.tipo = meuTipo;
        this.ano = meuAno;
    }
    anda() {
        console.log(`${this.marca}:o carro esta andando`);
    }
    buzina() {
        console.log(`${this.marca}:o carro esta buzinando`);
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map