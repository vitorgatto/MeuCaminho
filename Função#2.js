// ARMAZENANDO UMA FUNÇÃO EM UMA VARIÁVEL/CONSTANTE

const ImprimirSoma = function (a, b) {
    console.log(a + b)

}

ImprimirSoma(2, 3)

//Armazenando uma função ARROW em uma variável
const soma = (a, b) => /* => é uma atalho para Function*/{
    return a + b
}

console.log(soma(10,11))

//retorno implicito
const subtracao = (a, b) => (a - b) /* quando nao tenho chaves, a função 
                                    irá ter apenas uma sentença de cod*/

console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2 ('Legall!!!')