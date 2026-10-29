"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const Boleto_1 = require("./Boleto");
const CartaoCredito_1 = require("./CartaoCredito");
const cartao = new CartaoCredito_1.CartaoCredito();
const boleto = new Boleto_1.Boleto();
const pagamentos = [cartao, boleto];
pagamentos.forEach((pagamento) => {
    pagamento.processar();
});
