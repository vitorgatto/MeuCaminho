var numero = 1
{
    let numero = 2
    console.log('dentro=', numero)
}
console.log('fora=', numero)

/* 
Quando definimos uma variavel por LET, ele respeita a diferença
do escopo global e um escopodefinido por um bloco.
*/