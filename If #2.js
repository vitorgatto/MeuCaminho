
function teste1(num) {
     if(num > 7) {
        console.log(num)
        console.log('Final')
     }
} // para colocar varias sentenças, use chaves. Elas limitam o bloco IF

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); // sentença de código vazia (;). NÃO USE ; EM IF
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)
