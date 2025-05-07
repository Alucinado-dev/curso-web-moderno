/* 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado. */

function sistemaDeNotas(nota) {
    if (nota < 0 || nota > 100) {
        return "Nota inválida. A nota deve estar entre 0 e 100.";
    }

    if (nota < 38) {
        return `Aluno reprovado com nota ${nota}.`;
    }

    const proximoMultiploDe5 = Math.ceil(nota / 5) * 5;
    const diferenca = proximoMultiploDe5 - nota;

    if (diferenca < 3) {
        nota = proximoMultiploDe5;
    }

    if (nota >= 40) {
        return `Aluno aprovado com nota ${nota}.`;
    } else {
        return `Aluno reprovado com nota ${nota}.`;
    }
}


console.log(sistemaDeNotas(84)); 
console.log(sistemaDeNotas(29)); 
console.log(sistemaDeNotas(38)); 
console.log(sistemaDeNotas(57)); 
console.log(sistemaDeNotas(73)); 
console.log(sistemaDeNotas(67)); 
console.log(sistemaDeNotas(-5)); 
console.log(sistemaDeNotas(105)); 
