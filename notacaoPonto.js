console.log(Math.ceil(6.1)) // Ceil = arredonda um decimal para cima
console.log(Math.floor(5.7)) // floor = arredonda um decimal para baixo

const obj1 = {}
obj1.nome = 'Bola' /* Para criar um atributo dentro de um objeto de 
                        forma rápida, usa-se o ponto */

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj ('Mesa')
console.log(obj2.nome)
console.log (obj3.nome)
obj3.exec()