// OPERADOR DEDESESTRUTURAÇÃO. EXTRAI DO PARAMETRO SEUS ATRIBUTOS.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // tire nome e idade da constante pessoa
console.log (nome, idade)

const { nome: n, idade: i } = pessoa 
console.log (n, i) 

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const {endereço: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

//QUANDO TENTAR DESESTRUTURAR UM DADO, TENHA CERTEZA QUE O DADO 
// EXISTE E QUE SEU CAMINHO ESTÁ CORRETO