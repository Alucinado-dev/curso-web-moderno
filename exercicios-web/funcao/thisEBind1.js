const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar   /* quando a função é chamada aqui, o this aponta pro contexto atual, e não pra pessoa */
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) /* o método bind faz com que o this sempre aponte pro objeto selecionado */
falarDePessoa()


const qualOThis = () => console.log(this)
qualOThis()