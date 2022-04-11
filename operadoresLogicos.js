/* TABELAS VERDADE 
 
    ESTRUTURA "E"

    VERDADEIRO + VERDADEIRO = VERDADEIRO
     VERDADEIRO + FALSO = FALSO
    FALSO + QUALQUER = FALSO

    CONCLUSÃO: TODOS OS OPERANDOS DEVEM SER VERDADEIROS PARA QUE O RESULTADO
    SEJA VERDADEIRO.
    --------------------------------
    ESTRUTURA "OU"

    VERDADEIRO OU QUALQUER = VERDADEIRO
    FALSO OU FALSO = FALSO

    CONCLUSÃO: BASTA O PRIMEIRO OPERADOR SER VERDADEIRO PARA QUE O RESULTADO
    SEJA VERDADEIRO
    ---------------------------------
    ESTRUTURA "EXCLUSIVA"

    VERDADEIRO XOR VERDADEIRO = FALSO
    VERDADEIRO XOR FALSO = VERDADEIRO
    FALSO XOR VERDADEIRO = VERDADEIRO
    FALSO XOR FALSO = FALSO
    ---------------------------------
    NEGAÇÃO LÓGICA
    !VERDADEIRO = FALSO
    !FALSO = VERDADEIRO

*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || = ou
    const comprarTV50 = trabalho1 $$ trabalho2 
    // && = E
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) - bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
}


