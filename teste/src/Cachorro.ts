//toda classe começa com letra maiuscula.
//a palavra 'export' permite que outros aquivos importem e usem esta classe
//a palavra 'classe' inicia a declaração da classe
//depois, colocamos o nome da classe, que deve ser igual ao nome do arquivo seguido de chaves
export class Cachorro{
    //todo o codigo de classe vai aqui dentro
    // atributos são as coisas que um cachorro tem
    //são como variaveis, só que sem const e sem let

    nome:string
    peso:number
    raca:string

    //metodos são funçoes. elas são as coisas que o cachorro faz.
    // toda classe precisa de um método especial chamado 'constructor'
    //é ele que recebe os valores de nome, peso, raca, etc... e cria o objeto.
    
    constructor( meuNome:string, meuPeso:number, minhaRaca:string){
        this.nome= meuNome
        this.peso= meuPeso
        this.raca= minhaRaca
    }

    latir():void{
    console.log(`${this.nome}:au au au`)
    }

    comer(): void {
        console.log(`${this.nome}:nham nham `)
    }
}