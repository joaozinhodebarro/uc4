import { Personagem } from "./Personagem"
import { Arma } from "./Arma"

// Criando as armas
const espada = new Arma("Espada", 18)
const cajado = new Arma("Cajado", 25)

// Criando os personagens com suas armas
const guerreiro = new Personagem("Guerreiro", 18, espada)
const mago = new Personagem("Mago", 25, cajado)

// Um personagem ataca o outro
guerreiro.atacar(mago)
mago.atacar(guerreiro)

// Mostrando a vida final
console.log("Vida do Guerreiro:", guerreiro.vida)
console.log("Vida do Mago:", mago.vida)