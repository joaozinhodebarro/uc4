// import { Personagem } from "./Personagem";

// const personagem: Personagem = new Personagem("fulano", 100, 10);

// console.log(personagem.getVida());

import { Cachorro, } from "./Cachorro";
const cachorro:Cachorro = new Cachorro("jack", "pitbul", 12)
const outroCahorro:Cachorro = new Cachorro("scooby", "viralata", 10)
const novoCachorro:Cachorro = new Cachorro("fred", "doberman", 15)

console.log(cachorro.getNome());
console.log(cachorro.getraca());
console.log(cachorro.getPeso());

console.log(outroCahorro.getNome());
console.log(outroCahorro.getraca());
console.log(outroCahorro.getPeso());

console.log(novoCachorro.getNome());
console.log(novoCachorro.getraca());
console.log(novoCachorro.getPeso());