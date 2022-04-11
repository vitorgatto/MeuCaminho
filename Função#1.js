/* FUNÇÕES SÃO VERBOS, AÇÕES, COMANDOS. ELA DEFINE UM BLOCO
ASSOCIADO. QUANDO VOCÊ INVOCA UMA FUNÇÃO, INVOCA SEU ALGORITMO
ASSOCIADO A ELA. A MAIORIA DAS FUNÇÕES OBTEM UM NOME PARA QUE ASSIM,
ELA POSSA SER INVOCADA.
*/

// 1) FUNÇÃO SEM RETORNO
// coloque bons nomes de funções.

function ImprimirSoma(a, b) {
    console.log(a + b)
}    

ImprimirSoma(2,3)
ImprimirSoma(2) /* neste caso, o segundo valor, como não foi definido,
                 receberá Undefined */
ImprimirSoma(2, 5, 4, 5, 6) /* neste caso, ele vai pegar somente os dois
                             primeiros termos (2,3). O resto será
                             IGNORADO */
// FUNÇÃO COM RETORNO

function soma(a, b = 0) /* o valor 0 é definido como padrão */ {
        return a + b    /* QUANDO ele não for passado. */
}

console.log(soma(2,3))
