/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const jurosSimples = (capitalInicial, juros, tempo) => {
    const montante = capitalInicial * (1 + juros)
    const montanteFinal = montante * tempo

    return montanteFinal
}

const jurosCompostos = (capitalInicial, juros, tempo) => {
    let montante = capitalInicial
    
    for(let i = 0; i < tempo; i++){
        montante *= (1 + juros)
    }

    return montante
}
