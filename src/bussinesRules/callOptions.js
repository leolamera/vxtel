/* 
Usando o módulo de ligações, preenchemos objetos com as informações dispostas no PDF. Caso haja alguma alteração
no preço da minutagem ou seja necessário adicionar um novo cruzamento de DDD, é só configurar 
este arquivo que estará tudo certo.
*/

const { createCallOption } = require('./modules')

const VxTelPriceTable = {
    "011-016": createCallOption("011", "016", 1.90),
    "016-011": createCallOption("016", "011", 2.90),
    "011-017": createCallOption("011", "017", 1.70),
    "017-011": createCallOption("017", "011", 2.70),
    "011-018": createCallOption("011", "018", 0.90),
    "018-011": createCallOption("018", "011", 1.90)
}

module.exports = VxTelPriceTable