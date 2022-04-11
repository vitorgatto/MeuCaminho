const valores = [7.7, 8.9, 6.3, 9.2] // nº de indice começa do 0
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // length = quantos indices essa var tem

valores.push({id: 3}, false, null, "teste") //push = adiciona novos elementos no array
console.log(valores) // não é pratico misturar elementos. 
                    // preze por arrays de elementos homogêneos

console.log(valores.pop())
delete valores [0] // delete para tirar um elemento do array
console.log(valores)

console.log(typeof valores) // no JS, o array é de tipo Object)