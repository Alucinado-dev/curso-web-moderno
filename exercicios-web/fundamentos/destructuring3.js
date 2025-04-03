
/* função de numero aleatorio com minimo e maximo padroes definidos entre 0 e 1000 */
function rand({ min = 0, max = 1000 }) {  /* aqui o destructutring funciona para fazer com que min e max sejam acesiveis fora do escopo da função */
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

/* passando o objeto obj para dentro da função */
const obj = { max: 50, min: 40 }
console.log(rand(obj))

/* passando so o min */
console.log(rand({ min: 955 }))

/* passando um objeto vazio utilizando os valores padroes definidos */
// console.log(rand({}))

/* passando um nada = erro  */
// console.log(rand())

/* fazendo a mesma função sem usar desctruturing */
function aleatorio(min = 0, max = 1000) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// console.log(aleatorio(min: 10, max: 50)) /* erro */

console.log(aleatorio(10, 50)) /* mesmo código sem usar destructuring */

console.log(rand.min, rand.max)
console.log(obj.min, obj.max)
console.log(aleatorio.min, aleatorio.max)