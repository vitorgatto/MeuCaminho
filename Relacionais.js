console.log('01)', '1' == 1) // = atribuição. == relacional (true/false)
console.log('02)', '1' === 1) // === estritamente igual.
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log ('05)', 3 < 2)
console.log ('06)', 3 > 2)
console.log ('07)', 3  <= 2)
console.log ('08)', 3 >= 2)

const d1 = new Date(0) // 0 = data de referencia (01,01,1970)
const d2 = new Date(0)
console.log ('09)', d1 === d2) // use sempre o === (estritamente igual)
console.log('10)', d1 ==d2)
console.log('11)', d1.getTime === d2.getTime)
