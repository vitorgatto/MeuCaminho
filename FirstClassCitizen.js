//criar função de forma literal
function fun1() {}

//armazenar em uma variavel

const fun2 = function () {} // função anônima. Referenciada pela constante

//armazenar em um array
const array = [function (a, b){return a + b}, fun1, fun2]
//tambem pode armazenar em um array uma função de uma 
// constante
console.log(array[0](2,3))

// armazenar em um atributo de objeo

const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// passar função como parametro para outra função.
function run(fun) {
    fun() // para invocar uma função, abra e feche parenteses
}

run(function () { console.log('executando...')})

//uma função pode retornar/ conter outra função.
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3) (4)