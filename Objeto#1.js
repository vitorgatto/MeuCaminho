const prod1 = {}  //{} representa um objeto. [] representa array
prod1.nome = 'Celular Ultra Mega' // objeto em JS é coleçao de chave e valor.
                                // você pode passar o valor para essa chave.
prod1.preco = 4998.90
prod1['desconto Legal'] = 0.40 // evitar usar nomes com espaço.
// dentro de um objeto só pode haver um identificador. 

const prod2 = {
        nome: 'Camisa Polo', // separar com virgula caso haja mais de um indice
        preco: 79.90,
}
console.log(prod1)
console.log(prod2)

