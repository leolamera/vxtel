/* 
Usando o módulo de planos, preenchemos objetos com as informações dispostas no PDF. Caso haja alguma alteração
ou seja necessário adicionar um novo plano, é só configurar este arquivo que estará tudo certo.
*/

const { createPlanOption } = require('./modules')

const VxTelPlanTables = {
    30: createPlanOption("FaleMais 30", 30),
    60: createPlanOption("FaleMais 60", 60),
    120: createPlanOption("FaleMais 120", 120)
}

module.exports = VxTelPlanTables
