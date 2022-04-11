// DESAFIO DA TROCA

let a = 7;
let b = 94;

// depois da troca... a = 94 e b = 7

console.log(a);
console.log(b);

 a = 94;
 b = 7;

/* PARA TROCAR O VALOR DE UMAVARIÁVEL POR OUTRA, 
NÃO PRECISO DELCARAR OUTRA VEZ
*/

console.log(a);
console.log(b);

//outra forma de ser feito:

let TEMP = a; // cria-se uma variável temporária para receber o valor A
a = b; //depois A recebe B, deixando o valor de A = 94.  
b = TEMP; // Por fim, B receberá valor de TEMP: 7

console.log(a);
console.log(b);

// FORMA ESPECÍFICA COM JS
[a = b], [b = a]

