// par nome/valor

const saudacao = 'Opa' // contexto léxico 1 = local no qual a variavel foi
                        // definido FÍSICAMENTE no código.

function exec () {
    const saudacao = 'Falaaa' // contexto lexico 2
    return saudacao
}

//Objetos são grupos alinhados de pares nomes/valor
const Cliente = {
    nome: 'Pedro', 
    idade: 32,
    peso: 90,
    endereço: {
            logradouro: 'Rua muito legal',
            numero: 123
    }
}

console.log (saudacao)
console.log(exec())
console.log(Cliente)