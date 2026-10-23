import { Mamifero } from "./Mamifero";

 //usando a palavra extends informamos que a classe Cachorro
// herda a classe mamifero tudo que ela tem o cachorro tambem tem 
export class Cachorro extends Mamifero { 
      
    raca: string


    constructor(raca:string,nome:string, patas:number, pelo:string){
        //super vem de superclass que é a classe PAI/MAIN 
        //super nada mais é doque o constructor da class PAI
        super(nome,patas,pelo);
        this.raca = raca  //ele criou this.raca porque o raca só tem aqui o nome patas e pelo
                        // ele puxou la do mamifero 
    }
correr():void{
    console.log(`${this.getnome()} está correndo com suas${this.patas}.`)
}

}

//PRIVATE-> so a propria classe pode acessar diretamente usando 'this.atributo'. o 
//restante precisa usar 'getatributo' ou 'setatributo'

// PUBLIC-> qualquer um poder acessar e modificar diretamente. não precisa de getters ou setters 

//PROTECTED-> tanto a classe pai quanto a classe filhas podem acessar diretamente.o
//restante precisa usar 'getatributo' ou 'setatributo'