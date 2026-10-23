// essa classe vai ser a classe PAI main 

export class Mamifero {
private nome: string
protected patas: number         // atributos
private pelo: string

constructor(nome:string, patas:number, pelo:string) {
    this.nome = nome
    this.patas = patas     //construtor
    this.pelo = pelo
}

fazerSom():void {
    console.log(`${this.nome} está fazendo um barulho.`);
}
getnome():string{
    return this.nome
}
setnome(novonome:string):void{
    this.nome = novonome
}

}