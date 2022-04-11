let isAtivo = false
console.log (isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log (!isAtivo) /* ! (negação) . Uma negação reverte de false
                        para true. Duas negações, retorna o valor ao
                        original false para false. */

// SITUAÇÕES VERDADEIRAS
    console.log('os verdadeiros...')
    console.log (!!3) // tds os numeros inteiros são veradeiros - o 0
    console.log (!!-1)
    console.log(!!' ')
    console.log(!!'texto')
    console.log(!![])
    console.log(!!{})
    console.log(!!Infinity)
    console.log(!!(isAtivo = true))

//SITUAÇÕES FALSAS

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || 'epa ')) // || = ou

let nome = "Lucas" // com a var definida, ele mostra o nome
console.log(nome || 'Desconhecido')

let nome2 = " " // com var vazia, ele entende falso.
console.log(nome2 || 'Desconhecido')