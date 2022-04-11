{
    { 
        {
            {
                {
                    var sera = "Será???"
                }
            }
        }
    }
}

console.log(sera)

function teste() {
        var local = 123 // quando voce define uma var DENTRO da função,
                        // ela só podera ser vista quando a função for 
                        // invocada.
        console.log(local)
}

teste () /* evite criar variáveis que vão para o escopo global.
            isso pode fazer com que outra pessoa muda facilmente 
            o valor definido para aquela var, ocasionando problemas 
            nos códigos.
*/