// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa()) /* nesse caso está criando sempre uma nova instância d epessoa */

/* uma função factory é uma função que retorna um objeto */


/* desafio, criando uma factory com paramentros */

const criarCarro = (modelo,ano,preco,isNovo,cor,motor,combustivel) =>{
    return{
        marca : 'Fiat',
        modelo : modelo,
        ano : ano,
        preco : preco,
        desconto : 0.1 * preco,
        isNovo : isNovo,
        cor : cor,
        motor : motor,
        combustivel : combustivel
    }
}

const fiatUno = criarCarro('uno', '1999', 10000, false, 'prata', '1.0', 'gasolina') 

console.log(fiatUno);

/* resposta em factory2.js */

