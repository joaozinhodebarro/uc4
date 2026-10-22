// const nome: string = "pipoca";
// const energia:number = 50;

// console.log("Nome:", nome);
// console.log("Energia:", energia);

/*  
1) Crie uma classe chamada Pokemon.
o pokemon deve ter um nome(string), vida(number), e um poder(number).
o poder é uma classe que vamos criar tambem.

Metodos de Pokemon:
falar -> um metodo que recebe o nome do pokemon algumas vezes(this.repet(3))

atacar -> um metodo que recebe outro pokemon e ataca ele, tirando a vida dele.

atacarcomPoder -> um metodo que recebe outro pokemon e ataca ele tambem, porem diz o nome do poder e usa o ataque do poder.

2) Crie uma classe chamada Poder. Ela deve ter um nome(string) e ataque(number).
Nao precisa de nenhum metodo, exceto o constructor.

3) Crie dois poderes e dois pokemons no index e simule uma pequena batalha entre eles.

*/
/*
encapsulamento é o ato de proteger os dados dos nossos objetos (tanto os atributos quanto os metodos)
 e controlar como podem ser acessados ou modificados.

 exemplos: usando enxapsulamento, podemos impedir que alguem deixe a vida dp pokemon negativa.

 para utilizar encapsulamento nas  nossas classes, prrecisamos colocar certas palavras antes
dos atributos e antes dos metodos. são elas:
 - public (que se significa 'público')
  - private (que significa 'privado')
  - protected (que significa 'protegido')

 chamamos estes tres de modificadores de acesso. o 'public' permite que o atributo ou 
metodo seja acessado e modificado em qualquer arquivo do meu programa DIRETAMENTE. exemplo 

na classe -> public vida:number
 no index : pokemon.vida = 999

 O 'private' NÂO permite que o atributo ou método seja acessando e modificado de qualquer jeito.
  Para fazer isso,precisamos chamar os métodos da classe.
  */