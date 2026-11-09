"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiderTecnico = void 0;
class LiderTecnico {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    trabalhar() {
        console.log(`${this.nome} está trabalhando`);
    }
    programar() {
        console.log(`${this.nome} está programando`);
    }
    gerenciar() {
        console.log(`${this.nome} está gerenciando a equipe`);
    }
}
exports.LiderTecnico = LiderTecnico;
