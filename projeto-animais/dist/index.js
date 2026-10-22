"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
const Arma_1 = require("./Arma");
// Criando as armas
const espada = new Arma_1.Arma("Espada", 18);
const cajado = new Arma_1.Arma("Cajado", 25);
// Criando os personagens com suas armas
const guerreiro = new Personagem_1.Personagem("Guerreiro", 18, espada);
const mago = new Personagem_1.Personagem("Mago", 25, cajado);
// Um personagem ataca o outro
guerreiro.atacar(mago);
mago.atacar(guerreiro);
// Mostrando a vida final
console.log("Vida do Guerreiro:", guerreiro.vida);
console.log("Vida do Mago:", mago.vida);
