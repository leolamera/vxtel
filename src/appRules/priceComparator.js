const VxTelPriceTable = require('../bussinesRules/callOptions')
const VxTelPlanTables = require('../bussinesRules/planOptions')

module.exports = class PriceComparator {

    constructor(originPhone, fatePhone, minutes) {
        this.minutes = minutes
        this.callKeys = `${originPhone}-${fatePhone}`
        this.contextInfos = VxTelPriceTable[this.callKeys]
    }

    withouPlan() {
        const priceMinute = this.contextInfos.priceForMinutes
        const totalPrice = priceMinute * this.minutes
        return totalPrice.toFixed(2)

    }

    withPlan() {
        let returnObject = {}
        for (let key in VxTelPlanTables) {
            let planObject = VxTelPlanTables[key]
            let minutesDiff = this.minutes - planObject.planMinutes
            if (minutesDiff < 0) {
                returnObject[planObject.planName] = 0
            } else {
                let surplusTax = this.contextInfos.surplusPrice
                let surplusMinutesPrice = minutesDiff * surplusTax
                returnObject[planObject.planName] = surplusMinutesPrice.toFixed(2)
            }            
        }

        return returnObject
    }

    returnPrices() {
        return {
            withouPlan: this.withouPlan(),
            withPlan: this.withPlan()
        }
    }
}