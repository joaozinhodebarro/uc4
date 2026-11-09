"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Guerreiro_1 = require("./Guerreiro");
const Mago_1 = require("./Mago");
function executarAtaque(personagem) {
    personagem.atacar();
}
const guerreiro = new Guerreiro_1.Guerreiro("Arthur");
const mago = new Mago_1.Mago("Merlin");
executarAtaque(guerreiro);
executarAtaque(mago);
