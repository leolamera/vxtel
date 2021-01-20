# Projeto VxTel

Este projeto foi desenvolvido com o objetivo de demonstrar algumas skills no que tange o Desenvolvimento Web. O desafio foi proposto pela empresa Vortx. Clicando [aqui](https://www.vortx.com.br/uploads/ShowmethecodeBackend.pdf) você terá o documento de escopo.

![](https://drive.google.com/uc?export=download&id=1-4wmj-B4NDRvOHdJr_z8LAx3hqDd2TRE)

O Sistema consiste em 3 serviços, sendo eles: Api BackEnd, Front-End em React e os testes. Sendo o primeiro uma api REST desenvolvida para receber os parametros de DDD de origem, DDD de destino e os minutos; o segundo um interface gráfica encontrada na rota base (index) do nosso endpoint, e o último uma série de funções que realizam o teste de regra de negócio do software.

## Deploy 

Para o deploy, usamos o serviço da [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

## Como usar


```bash
# Para instalar as dependências
yarn install

# Para rodar em ambiente de desenvolvimento
yarn dev

# Para rodar em ambiente de produção
yarn build

# Para rodar os testes
yarn jest
```


## Arquitetura

Usamos uma arquitetura de monolito, onde todos os serviços são disponibilizados pelo mesmo servidor, uma vez que é apenas uma API REST com método GET e uma tela de Front-End desenvolvida em react. Sendo assim, usar algum tipo de microserviço seria exagero, visto que o sistema da Vercel já provê o load balancer.

### Stack

- **Para o BackEnd:** Usamos o NextJS para desenvolver o único Endpoint, encontrado na ``/api/PriceCalculator``. O request é capturado pelo query params e não pelo body da requisição, isso foi decidido para facilitar nossa requisição no FrontEnd. O NextJS trabalha com File System Routing, ou seja, para cada arquivo dentro do diretório ``/pages/api`` é gerado um novo EndPoint.

- **Para o FrontEnd:** Igualmente ao BackEnd, foi desenvolvido usando NextJS, ReactJS para a renderização de componentes, Axios para a realização de requisições em nossa API, Unform para a construção e manipulação do forumulário (usando o paradigma de uncontrolled Forms) e Styled Components para a estilização. Pelo fato do NextJS ser usado, o que é entregue ao usuário é nada mais que uma página HTML estática, renderizada no BackEnd, e quando algo é atualizado, o servidor entrega ao cliente um novo HTML atualizado.

- **Para os Testes:** Foi usado a biblioteca Jest, perfeitas para ciclos de TDD, sendo feitos da seguinte forma durante o desenvolvimento deste projeto:
  - Escrevemos o Teste
  - Escrevemos o Software
  - Rodamos o Teste
    - Se passou por esta etapa, vamos para a próxima
    - Caso não tenha passado, rescrevemos o Software

### BackEnd Files

Foi usado o paradigma de programção orientada a objeto para o desenvolvimento do BackEnd, tanto como o respeito as camadas do Clean Architecture, sendo o centro a regra de negócio que tem comunicação apenas com as regras de I/O, esta que se comunica apenas com a interface.

```bash
.
└── pages
│    └── api
│       └── priceCalculator.js
└── src
    ├── appRules
    │   └── priceComparator.js
    └── bussinesRules
        ├── callOptions.js
        ├── modules.js
        └── planOptions.js
```

Dentro de ``src/bussinesRules`` temos três arquivos, sendo eles:
- **modules.js**: exportação de duas funções abstract factory desenvolvidas para criar a regra de negócio dos DDDs e preço da minutagem.
- **callOptions.js**: usando uma das funções abstract factory preenchemos as regras sobre os DDDs, no caso de futura mudança de regra, é apenas neste arquivo que realizaremos as mudanças.
- **planOptions.js**: usando uma das funções abstract factory preenchemos as regras sobre os o preço da minutagem, no caso de futura mudança de regra, é apenas neste arquivo que realizaremos as mudanças.

Dentro de ``src/appRules`` contém um arquivo que dita as regras de I/O:
- **priceComparator.js**: exporta uma classe para que seja usado tanto na interface de comunicação do software como nos testes. Esta classe recebe três paramêtros (DDD de origem, DDD de destino e Minutos), se algum momento for necessário adicionar ou mudar esses paremêtros ou adicionar uma nova feature de calculo, este arquivo será alterado.

Dentro de ``pages/api`` contém a interface de comunicação com o FrontEnd ou qualquer outra requisição vinda da internet:
- **priceCalculator.js**: tem um request handling, capaz de tratar alguns erros de requisição, como tratativa do método, e validação dos parâmetros enviados, todos seguindo as boas práticas de status code do RESTful (405 para erro no método, 406 para erro no parâmetro e 200 para sucesso). Este é o único arquivo que tem conexão com a internet.

### FrontEnd Files

Para o FrontEnd foi usado técnicas de programação funcional, uma vez que usamos React Hooks e Uncontrolled Forms.

```bash
.
├── components
│   └── Form
│       ├── MinutesInput.js
│       └── RadioInput.js
├── pages
│   ├── _app.js
│   ├── _document.js
│   └── index.js
└── styles
    ├── MinutesInput.js
    ├── RadioInput.js
    └── index.js
```
Em ``/components/Form`` contém os componentes relativo ao formulário. Uma vez que foi usado uma biblioteca voltada para uncontrolled Forms, separamos os componentes, que retornam um objeto cada com os valores preenchidos.
- **MinutesInput.js:** retorna um objeto com o valor dos minutos preenchidos, tendo como valor default 120 minutos. Foi desenvolvido usando react hooks.

- **RadioInput.js:** retorna um objeto com uma chave DDD, dentro dela tendo o valor do DDD de origem (011 por padrão) e DDD de destino (016 por padrão) Foi desenvolvido usando react hooks.

Em ``/pages`` guardamos os arquivos relativos a renderização, sendo dito já que é usado o System Files Routing para criar novas rotas, porém os arquivos que contém um ``_`` no ínico, são usados para configurar a renderização.
- **_document.js:** Configuramos o uso do Styled Components.

- **_app.js:** Setamos as configurações globais de estilo usando Styled Components e a renderização de outros arquivos.
  
- **index.js:** Importamos os componentes do formulário e construimos este na página do index, usando o valor retornado no objeto do formulário, usando o Hook UseEffect (com IEFY) e UseState controlamos o estado das tabelas de preços seguindo os valores no objeto do formulário.

Em ``/styles`` estão nossos arquivos de estilização, esta que foi feita usando o pacote Styled Components, para manter o core da aplicação em NodeJS, cada arquivo dentro desta pasta tem o mesmo nome do arquivo o qual ele exporta a estilização.

### Testes

Para o desenvolvimento deste APP, usamos um ciclo de TDD, seguindo sempre o sucesso dos testes como validação do sucesso da etapa. Para isso foi usado o pacote [Jest](https://jestjs.io). Construimos funções baseadas na tabela disposta no documento de escopo para aprovar o sucesso do teste. 

<details>
<summary>Clique aqui para ver mais sobre o teste</summary>
<br />

![](https://drive.google.com/uc?export=download&id=1AsCj1b3AgPbplOTxptJuBxZjA-NkD_1I)

**tabela origem para a criação dos teste**
| Origem 	| Destino 	| Tempo 	| Plano FaleMais 	| Com FaleMais 	| Sem FaleMais 	|
|-	|-	|-	|-	|-	|-	|
| 011 	| 016 	| 20 	| FaleMais 30 	| R$ 0.00 	| R$ 38.00 	|
| 011 	| 017 	| 80 	| FaleMais 60 	| R$ 37.40 	| R$ 136.00 	|
| 018 	| 011 	| 200 	| FaleMais 120 	| R$ 167.20 	| R$ 380.00 	|

**exemplo de função de teste**

```javascript
const PriceComparator = require('../src/appRules/priceComparator')

test("function name", () => {
    // passamos para o constructor da classe os valores de input
    const result = new PriceComparator("011", "016", 20).returnPrices()
    // exemplo de objeto de resposta esperado com inputs acima
    const resultObject = {
        withouPlan: '38.00',
         withPlan: { 
            'FaleMais 30': 0, 
            'FaleMais 60': 0, 
            'FaleMais 120': 0 
                }
            } 

    // regra de validação do teste
    expect(result).toStrictEqual(resultObject)


})

