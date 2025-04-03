function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {          /* throw vai de fato lançar o erro, a mensagem de erro que o console vai retornar vai ser essa */
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')  /* tentar executar esse código */
    } catch (e) {
        tratarErroELancar(e)  /* caso dê algum erro no codigo do try, o bloco dentro de catch irá rodar */
    } finally {
        console.log('final')  /* mesmo que dê problema o codigo vai chamar o finally */
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)