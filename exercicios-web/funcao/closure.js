// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) /* retorna 'local' */

/* a função lembra das suas origens, como o retorno de fora() é dentro()
    minhafuncao recebe dentro()
    closure é esse escopo que envolve a função
    quando voce chama a função em lugar diferente ela lembra de quando foi declarada, do contexto
    portanto dentro está definida dentro do contexto de fora() */