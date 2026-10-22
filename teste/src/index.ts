//como exportamos a classe, nós agora podemos importá-la

//import {Cachorro} from "./Cachorro";

//para criar um objetos criamos uma variavel que deve ser do tipo da classe (Cachorro)
//depois usamos a palavra 'new' para criar um novo Cachorro
//dentro dos parentese, precisamos colocar todas as informaçoes que o constructor pede  

//const meuCachorro:Cachorro = new Cachorro("tobby", 10.50, "viralata")
//const outroCahorro:Cachorro = new Cachorro("rex", 20.00, "pitbull")
//agora, podemos acessar as informaçoes do cachorro. exemplo para ver o nome:
//console.log (meuCachorro.nome)
//console.log(meuCachorro.peso)
//console.log(meuCachorro.raca)
//console.log(outroCahorro.nome)
//console.log(outroCahorro.peso)
//console.log(outroCahorro.raca)

import { Carro } from "./Carro";
const meuCarro:Carro= new Carro("BMW","SEDAN", 2020)
const outroCarro:Carro=new Carro("RENAULT", "HATCH", 2019)
const novoCarro:Carro=new Carro("CHEVROLET", "SEDAN", 2026)

console.log(meuCarro.marca)
console.log(meuCarro.tipo)
console.log(meuCarro.ano)
console.log(outroCarro.marca)
console.log(outroCarro.tipo)
console.log(outroCarro.ano)
console.log(novoCarro.marca)
console.log(novoCarro.tipo)
console.log(novoCarro.ano)

meuCarro.anda()
meuCarro.buzina()

outroCarro.anda()
outroCarro.buzina()

novoCarro.anda()
novoCarro.buzina()