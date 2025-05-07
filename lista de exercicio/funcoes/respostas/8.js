/* Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */

const avaliadorDePontuacoes = (pontuacoes) => {
    /* transformar essa lista string em um array */
    let pontuacoesSeparadas = pontuacoes.split(" ")
    
    let maiorPontuacao = parseInt(pontuacoesSeparadas[0])
    let menorPontuacao = parseInt(pontuacoesSeparadas[0])
    let numeroRecorde = 0
    let piorJogo = 1

    for (let i = 1; i < pontuacoesSeparadas.length; i++) {
        let pontuacao = parseInt(pontuacoesSeparadas[i])
        if (pontuacao > maiorPontuacao) {
            maiorPontuacao = pontuacao
            numeroRecorde++
        } else if (pontuacao < menorPontuacao) {
            menorPontuacao = pontuacao
            piorJogo = i + 1
        }
    }

    return [numeroRecorde, piorJogo]
}

let pontuacoesDoPedro = "10 20 20 8 25 3 0 30 1"
console.log(avaliadorDePontuacoes(pontuacoesDoPedro))
