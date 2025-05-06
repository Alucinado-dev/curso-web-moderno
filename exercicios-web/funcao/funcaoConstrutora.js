
/* esse tipo de função vai construir um objeto */
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico, o this faz com que o dado seja publico e acessivel
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro /* uno vai ser objeto, carro vai ser uma função */
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

/*  a função funciona como um molde,  e a partir desse molde dá pra fazer vários objetos, o dado interno dessa função
    vai pertencer a cada um dos objetos, seja ele um dado privado ou umdado publico
*/

/* essa estrutura funciona de forma bem parecida com a orientação a objeto e com as classes em java */