
/*Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )*/

class grandeGuerreiro{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
}


/*além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

*/

let atacar = new grandeGuerreiro("Luffy", 17 , "ninja")

if (atacar.tipo === "mago"){
    console.log(`o ${atacar.tipo} atacou usando magia`)
} else if (atacar.tipo === "guerreiro"){
    console.log(`o ${atacar.tipo} atacou usando espada`)
} else if (atacar.tipo === "monge"){
        console.log(`o ${atacar.tipo} atacou usando artes marciais`)
} else if (atacar.tipo === "ninja"){
    console.log(`o ${atacar.tipo} atacou usando shuriken`)
}

/* ## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada*/
 

 