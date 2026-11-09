
import type { Atacante } from "./Atacante";
import { Guerreiro } from "./Guerreiro";
import { Mago } from "./Mago";

function executarAtaque(personagem: Atacante): void {
  personagem.atacar();
}

const guerreiro = new Guerreiro("Arthur");
const mago = new Mago("Merlin");

executarAtaque(guerreiro);
executarAtaque(mago);