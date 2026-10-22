export class Carro{
marca:string
tipo:string
ano:number

constructor(minhaMarca:string,meuTipo:string,meuAno:number){

    this.marca=minhaMarca
    this.tipo=meuTipo
    this.ano=meuAno
}
    anda():void{
        console.log(`${this.marca}:o carro esta andando`)
    }

    buzina():void{
        console.log(`${this.marca}:o carro esta buzinando`)
    }

}
