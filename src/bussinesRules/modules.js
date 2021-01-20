
/* 
Este arquivo contem duas funções seguindo o Design Pattern Factory, com o objetivo de constituir
dois objetos, um referente ao plano e outro as possibilidades de ligação e cruzamento de DDD.
*/


module.exports.createCallOption = (originPhone, fatePhone, priceForMinutes) => {
    let object = {}

    function surplusPrice() {
        return priceForMinutes + (priceForMinutes * 0.1)
    }

    object.originPhone = originPhone
    object.fatePhone = fatePhone
    object.priceForMinutes = priceForMinutes
    object.surplusPrice = surplusPrice()

    return object
}
module.exports.createPlanOption = (planName, planMinutes) => {
    let object = {}

    object.planName = planName
    object.planMinutes = planMinutes

    return object

}
