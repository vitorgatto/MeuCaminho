const a = {name: 'Teste'}

const b = a // atribuição por referência. 

/*Quando falamos que os dados são passados por referência 
significa que irão apontar para o mesmo objeto na memória 
– o novo objeto será apenas uma referência ao caminho do 
objeto original na memória (pense como se fosse um atalho 
que você cria no seu desktop). */

b.name = "opa"

console.log(b)
console.log(a)

//OUTROS EXEMPLOS

let valor // não inicializada
console.log(valor) // undefined. nada foi associado a essa var
                    // is not defined é diferente de undefined.
                    // indefined, uma var é declarada mas nao definida.
                    // not defined, a var não foi nem declarada.

//NULO
// neste caso, tiramos o vlaor associado a uma var

valor = null // ausência de valor

const produto ={}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto) // EVITE ATRIBUIR UNDEFINED

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)