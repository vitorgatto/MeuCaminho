var numero = 1
{
    var numero = 2
    console.log('dentro', numero)
}
console.log("fora =", numero) 

/* Definir uma variável por VAR é perigoso. 
pois ela pode ser alterada MESMO que esteja em um bloco.
A unica forma dela não ser alterada, é colocando-a 
num escopo de uma FUNÇÃO.
*/