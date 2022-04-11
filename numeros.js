const peso1 = 1.0
const peso2 = Number ("2.0") // Number (N maiusculo = Função)

console.log(peso1,peso2)
console.log (Number.isInteger(peso1)) // isInteger =  saber se é um 
                                    //  valor inteiro ou não.
const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log (media.toFixed(2)) // toFixed = exibe apenas X numeros apos 
                                // a vírgula

console.log (media.toString(2)) /* toString = transforma em texto.
                               2 neste caso, converte o valor 
                               em Binario   */ 

console.log(typeof media) // typeOf = imprime o tipo do dado
