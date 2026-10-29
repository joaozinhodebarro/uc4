// import { Veiculo } from "./Veiculo";
// import { Bicicleta } from "./Bicicleta";
// import { Carro } from "./Carro";
// const Movimento:Veiculo[]=[
//     new Veiculo(),
//     new Carro(),
//     new Bicicleta(),
// ];
// Movimento.forEach(Movi => {
//     console.log(`seu movimento está á km por hora:${Movi.mover()}`)
// });

import { Boleto } from "./Boleto";
import { CartaoCredito } from "./CartaoCredito";
import { Pagamento } from "./Pagamento";

const cartao = new CartaoCredito();
const boleto = new Boleto();

const pagamentos: Pagamento[] = [cartao, boleto];

pagamentos.forEach((pagamento) => {
    pagamento.processar();
});