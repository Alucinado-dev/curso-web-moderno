// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

/* isso é uma função autoinvocada */

/* é bom pra fugir do escopo global, principalmente se estiver em um console */
/* isso evita deixar todos os scripts manipular variaveis */