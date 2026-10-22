"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
const personagem = new Personagem_1.Personagem("fulano", 100, 10);
console.log(personagem.getVida());
const Cachorro_1 = require("./Cachorro");
const cachorro = new Cachorro_1.Cachorro("jack", "pitbul", 12);
const outroCahorro = new Cachorro_1.Cachorro("scooby", "viralata", 10);
const novoCachorro = new Cachorro_1.Cachorro("fred", "doberman", 15);
