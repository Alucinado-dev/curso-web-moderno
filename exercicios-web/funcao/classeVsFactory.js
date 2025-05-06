class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
        /* nesse caso como eu usei o this, o this é igual pessoa */
        /* então sempre que eu chamar a falar() em qualquer lugar do código */
        /* ele vai chamar o método nome referente a classe pessoa */
    
    }
}

const p1 = new Pessoa('João')  /* new cria uma nova instancia, um novo objeto com os moldes da classe pessoa */
p1.falar()

/* faz o mesmo que acima mas usando função  factory */

const criarPessoa = (nome) => {
    return {
        falar: () => {console.log(`Meu nome é ${nome}`)}
    }
}

const p2 = criarPessoa('João')
p2.falar()

/* na factory não preciso usar o this, esse objeto tem ciencia do contexto que foi definido */