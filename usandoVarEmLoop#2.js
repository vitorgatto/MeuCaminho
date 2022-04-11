const funcs = []

for (var i = 0; i <10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2] () // é um problema. Pois foi usado VAR, então ele nao respeita
            // o escopo da função.

var numero = 5

