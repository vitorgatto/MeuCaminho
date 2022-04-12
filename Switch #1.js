const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
           // Case 10 sem sentenças, entende-se que ele faz
           // parte do Case 9, de outra forma: case 10 ou 9...    
        case 9:
            console.log('Quadro de Honra')
            break /* break : só sairá da estrutura de controle
                    se este comando for digitado.
            */
        case 8: case 7: // variação de uma linnha sem sentença.
            console.log( 'Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
        }
}

console.log (`1): ${imprimirResultado(10)}.`)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)