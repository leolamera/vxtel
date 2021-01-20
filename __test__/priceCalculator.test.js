const PriceComparator = require('../src/appRules/priceComparator')

test("input with 011, 016 and 20 minutes", () => {
    const result = new PriceComparator("011", "016", 20).returnPrices()
    const resultObject = {
        withouPlan: '38.00',
         withPlan: { 
            'FaleMais 30': 0, 
            'FaleMais 60': 0, 
            'FaleMais 120': 0 
                }
            } 

    expect(result).toStrictEqual(resultObject)


})

test("input with 011, 017 and 80 minutes", () => {
    const result = new PriceComparator("011", "017", 80).returnPrices()
    const resultObject = {
        withouPlan: '136.00',
        withPlan: { 
        'FaleMais 30': '93.50',
        'FaleMais 60': '37.40',
        'FaleMais 120': 0 
            }
        } 

    expect(result).toStrictEqual(resultObject)


})

test("input with 018, 011 and 200 minutes", () => {
    const result = new PriceComparator("018", "011", 200).returnPrices()
    const resultObject = { 
        withouPlan: '380.00',
        withPlan:{ 
            'FaleMais 30': '355.30',
            'FaleMais 60': '292.60',
            'FaleMais 120': '167.20' 
            } 
        } 

    expect(result).toStrictEqual(resultObject)


})