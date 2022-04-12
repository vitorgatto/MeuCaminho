const notas = [6.7, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i+`) ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

// é melhor usar a estrutura For in para OBJETOS
for(let atributo in pessoa) { // use LET para fazer com que a variavel pertença somente 
                                // a esse escopo
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

