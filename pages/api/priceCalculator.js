/* 
Este arquivo é a interface de comunicação com o Front-end. Recebe apenas o método GET pois o usuário espera
receber alguma informação e seguimos os princípios REST full neste projeto.
200 - sucesso na requisição
406 - body não contém todas as informações necessárias, então NÃO FOI AUTORIZADO
405 - o método da requisição não foi GET, então MÉTODO NÃO ACEITO
*/

const PriceComparator = require("../../src/appRules/priceComparator")

export default (request, response) => {
  console.log(request.query)
  if (request.method === 'GET') {
    const { originPhone, fatePhone, minutes } = request.query
    if (!originPhone || !fatePhone|| !minutes) {
        response.statusCode = 406
        response.json({ error: 'Do you need pass originPhone, fatePhone and minutes' })
      } else {
        response.statusCode = 200
        const pricesObject = new PriceComparator(originPhone, fatePhone, minutes).returnPrices()
        response.json({ data: [pricesObject] })
    }
  } else {
    response.statusCode = 405
    response.json({ error: 'This API only accpets GET request' })
  }
  
}
