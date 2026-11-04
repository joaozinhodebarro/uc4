import { Bergantim } from "./Bergatim";
import { Chalupa } from "./Chalupa";
import { Galeao } from "./Galeao";
import { Navio } from "./Navio";

// Criando os navios
const bergantim = new Bergantim("Vento Forte");
const chalupa = new Chalupa("Pequena Aventura");
const galeao = new Galeao("Rei dos Mares");

// Exibindo informações
console.log("===== INFORMAÇÕES =====");

bergantim.exibirInformacoes();
chalupa.exibirInformacoes();
galeao.exibirInformacoes();

// Navegando
console.log("===== NAVEGAÇÃO =====");

bergantim.navegar();
chalupa.navegar();
galeao.navegar();

// Atacando
console.log("===== ATAQUES =====");

bergantim.atacar();
chalupa.atacar();
galeao.atacar();

// Recebendo danos
console.log("===== RECEBENDO DANOS =====");

bergantim.receberDano(30);
chalupa.receberDano(20);
galeao.receberDano(80);

// Consultando vida
console.log("===== VIDA ATUAL =====");

console.log("Bergantim:", bergantim.getVida());
console.log("Chalupa:", chalupa.getVida());
console.log("Galeão:", galeao.getVida());

// Método exclusivo da Chalupa
console.log("===== EXPLORAÇÃO =====");

chalupa.explorarIlha();

// Método exclusivo do Galeão
console.log("===== REPARAÇÃO =====");

galeao.repararNavio();

// Testando dano inválido
console.log("===== TESTE DE ERRO =====");

bergantim.receberDano(-10);

// POLIMORFISMO
console.log("===== POLIMORFISMO =====");

const navios: Navio[] = [
    bergantim,
    chalupa,
    galeao
];

navios.forEach((navio) => {
    navio.exibirInformacoes();
    navio.navegar();
    navio.atacar();
});

const navio: Navio[] = [
    bergantim,
    chalupa,
    galeao
]