/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

const divisao = (dividendo, divisor) => {
    const resultado = dividendo / divisor
    const resto = dividendo % divisor

    console.log(`
        o resultado da divisão é ${resultado};
        enquanto o resto da divisão é ${resto}    
    `)
}

divisao(10,2)
divisao(55,10)