let preco = 19.90; // A escolha dos nomes é fundamental.
let desconto = 0.4; // para saber preço já com desconto, multiplicar por 
                    // 0% ( exemplo: 40% = 0,4)

console.log(preco * (1 - desconto));

let precoComDesconto = preco * (1 - desconto);
console.log (precoComDesconto);

console.log("o desconto é de:", desconto,
             ". Portanto, o preço com desconto fica:", precoComDesconto)
// String (Texto) -> Sequência de Símbolos