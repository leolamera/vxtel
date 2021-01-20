import { useState, useEffect } from 'react'
import axios from 'axios'
import { Form } from '@unform/web'
import RadioInput from '../components/Form/RadioInput'
import MinutesInput from '../components/Form/MinutesInput'
import { Body, PageTitle, SubTitle, SubmitButton, VerticalLine, PriceContainer, EconomicFlag, InfoContainer } from '../styles/index'

export default function grid() {

    const [formObject, setFormObject] = useState({DDD:{originPhone: "011", fatePhone: "016"}, minutes:"120"})
    const [resultTable, setResultTable] = useState([])


    useEffect(() => {
        (async () => {
            const response = await axios.get(`/api/priceCalculator?minutes=${formObject.minutes}&originPhone=${formObject.DDD.originPhone}&fatePhone=${formObject.DDD.fatePhone}`)
            setResultTable(() => response.data.data)
        })()
    }, [formObject])

    function handleSubmit(newData) {
        setFormObject(newData)
      }

    return (
        <div>
            <Body>
                <div>
                    <PageTitle>VxTel</PageTitle>
                    <SubTitle>Calcular valor da ligação </SubTitle>
                </div>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <RadioInput name="DDD"/>
                        <MinutesInput name="minutes"/>
                        <SubmitButton type="submit">Gerar Orçamento</SubmitButton>
                    </Form>
                </div>
                <div>
                    {
                        resultTable.map((response) => {
                            const Plan120 = response.withPlan["FaleMais 120"]
                            const Plan60 = response.withPlan["FaleMais 60"]
                            const Plan30 = response.withPlan["FaleMais 30"]
                            const noPlan = response.withouPlan
                            const arrayPlan = [Plan120, Plan60, Plan30, noPlan].map(Number)
                            const economicPlan = Math.min(...arrayPlan)

                            return (
                                <div>
                                    {noPlan == economicPlan? <PriceContainer style={{opacity: "100%"}}>
                                    {noPlan == economicPlan? <EconomicFlag/> : <div></div>}
                                    <h1>Sem <br/>Plano</h1>
                                    <VerticalLine/>
                                    <InfoContainer>
                                    <div>
                                        <h2>DDD/Origem</h2>
                                        <h3>{formObject.DDD.originPhone}</h3>
                                    </div>
                                    <div>
                                        <h2>DDD/Destino</h2>
                                        <h3>{formObject.DDD.fatePhone}</h3>
                                    </div>
                                    <div>
                                        <h2>Minutos</h2>
                                        <h3>{formObject.minutes}</h3>
                                    </div>
                                    <div>
                                        <h2>Preço/Mês</h2>
                                        {noPlan == economicPlan? <h3 style={{color:"#2958E6"}}>R${noPlan}</h3> : <h3>R${noPlan}</h3>}
                                    </div>
                                    </InfoContainer>
                                </PriceContainer>
                                :
                                <PriceContainer style={{opacity: "60%"}}>
                                    {noPlan == economicPlan? <EconomicFlag/> : <div></div>}
                                    <h1>Sem <br/>Plano</h1>
                                    <VerticalLine/>
                                    <InfoContainer>
                                    <div>
                                        <h2>DDD/Origem</h2>
                                        <h3>{formObject.DDD.originPhone}</h3>
                                    </div>
                                    <div>
                                        <h2>DDD/Destino</h2>
                                        <h3>{formObject.DDD.fatePhone}</h3>
                                    </div>
                                    <div>
                                        <h2>Minutos</h2>
                                        <h3>{formObject.minutes}</h3>
                                    </div>
                                    <div>
                                        <h2>Preço/Mês</h2>
                                        {noPlan == economicPlan? <h3 style={{color:"#2958E6"}}>R${noPlan}</h3> : <h3>R${noPlan}</h3>}
                                    </div>
                                    </InfoContainer>
                                </PriceContainer>
                                }
                                    
                                {Plan30 == economicPlan? <PriceContainer style={{opacity: "100%"}}>
                                {Plan30 == economicPlan? <EconomicFlag/> : <div></div>}
                                    <h1>Fale<br/>Mais 30</h1>
                                    <VerticalLine/>
                                    <InfoContainer>
                                        <div>
                                            <h2>DDD/Origem</h2>
                                            <h3>{formObject.DDD.originPhone}</h3>
                                        </div>
                                        <div>
                                            <h2>DDD/Destino</h2>
                                            <h3>{formObject.DDD.fatePhone}</h3>
                                        </div>
                                        <div>
                                            <h2>Minutos</h2>
                                            <h3>{formObject.minutes}</h3>
                                        </div>
                                        <div>
                                            <h2>Preço/Mês</h2>
                                            {Plan30 == economicPlan? <h3 style={{color:"#2958E6"}}>R${Plan30}</h3> : <h3>R${Plan30}</h3>}
                                        </div>
                                    </InfoContainer>
                                </PriceContainer>
                                : 
                                <PriceContainer style={{opacity: "60%"}}>
                                {Plan30 == economicPlan? <EconomicFlag/> : <div></div>}
                                    <h1>Fale<br/>Mais 30</h1>
                                    <VerticalLine/>
                                    <InfoContainer>
                                        <div>
                                            <h2>DDD/Origem</h2>
                                            <h3>{formObject.DDD.originPhone}</h3>
                                        </div>
                                        <div>
                                            <h2>DDD/Destino</h2>
                                            <h3>{formObject.DDD.fatePhone}</h3>
                                        </div>
                                        <div>
                                            <h2>Minutos</h2>
                                            <h3>{formObject.minutes}</h3>
                                        </div>
                                        <div>
                                            <h2>Preço/Mês</h2>
                                            {Plan30 == economicPlan? <h3 style={{color:"#2958E6"}}>R${Plan30}</h3> : <h3>R${Plan30}</h3>}
                                        </div>
                                    </InfoContainer>
                                </PriceContainer>
                                }
                                {Plan60 == economicPlan? <PriceContainer style={{opacity: "100%"}}>
                                {Plan60 == economicPlan? <EconomicFlag/> : <div></div>}
                                    <h1>Fale <br/>Mais 60</h1>
                                    <VerticalLine/>
                                    <InfoContainer>
                                        <div>
                                            <h2>DDD/Origem</h2>
                                            <h3>{formObject.DDD.originPhone}</h3>
                                        </div>
                                        <div>
                                            <h2>DDD/Destino</h2>
                                            <h3>{formObject.DDD.fatePhone}</h3>
                                        </div>
                                        <div>
                                            <h2>Minutos</h2>
                                            <h3>{formObject.minutes}</h3>
                                        </div>
                                        <div>
                                            <h2>Preço/Mês</h2>
                                            {Plan60 == economicPlan? <h3 style={{color:"#2958E6"}}>R${Plan60}</h3> : <h3>R${Plan60}</h3>}
                                        </div>
                                    </InfoContainer>
                                </PriceContainer>
                                :
                                <PriceContainer style={{opacity: "60%"}}>
                                {Plan60 == economicPlan? <EconomicFlag/> : <div></div>}
                                    <h1>Fale <br/>Mais 60</h1>
                                    <VerticalLine/>
                                    <InfoContainer>
                                        <div>
                                            <h2>DDD/Origem</h2>
                                            <h3>{formObject.DDD.originPhone}</h3>
                                        </div>
                                        <div>
                                            <h2>DDD/Destino</h2>
                                            <h3>{formObject.DDD.fatePhone}</h3>
                                        </div>
                                        <div>
                                            <h2>Minutos</h2>
                                            <h3>{formObject.minutes}</h3>
                                        </div>
                                        <div>
                                            <h2>Preço/Mês</h2>
                                            {Plan60 == economicPlan? <h3 style={{color:"#2958E6"}}>R${Plan60}</h3> : <h3>R${Plan60}</h3>}
                                        </div>
                                    </InfoContainer>
                                </PriceContainer>
                                }             
                                
                                {Plan120 == economicPlan? <PriceContainer style={{opacity: "100%"}}>
                                {Plan120 == economicPlan? <EconomicFlag/> : <div></div>}
                                    <h1>Fale <br/>Mais 120</h1>
                                    <VerticalLine/>
                                    <InfoContainer>
                                        <div>
                                            <h2>DDD/Origem</h2>
                                            <h3>{formObject.DDD.originPhone}</h3>
                                        </div>
                                        <div>
                                            <h2>DDD/Destino</h2>
                                            <h3>{formObject.DDD.fatePhone}</h3>
                                        </div>
                                        <div>
                                            <h2>Minutos</h2>
                                            <h3>{formObject.minutes}</h3>
                                        </div>
                                        <div>
                                            <h2>Preço/Mês</h2>
                                            {Plan120 == economicPlan? <h3 style={{color:"#2958E6"}}>R${Plan120}</h3> : <h3>R${Plan120}</h3>}
                                        </div>
                                    </InfoContainer>
                                </PriceContainer>
                                :
                                <PriceContainer style={{opacity: "60%"}}>
                                {Plan120 == economicPlan? <EconomicFlag/> : <div></div>}
                                    <h1>Fale <br/>Mais 120</h1>
                                    <VerticalLine/>
                                    <InfoContainer>
                                        <div>
                                            <h2>DDD/Origem</h2>
                                            <h3>{formObject.DDD.originPhone}</h3>
                                        </div>
                                        <div>
                                            <h2>DDD/Destino</h2>
                                            <h3>{formObject.DDD.fatePhone}</h3>
                                        </div>
                                        <div>
                                            <h2>Minutos</h2>
                                            <h3>{formObject.minutes}</h3>
                                        </div>
                                        <div>
                                            <h2>Preço/Mês</h2>
                                            {Plan120 == economicPlan? <h3 style={{color:"#2958E6"}}>R${Plan120}</h3> : <h3>R${Plan120}</h3>}
                                        </div>
                                    </InfoContainer>
                                </PriceContainer>
                                }
                                </div>
                                
                            )
                        })
                    }
                </div>
            </Body>
        </div>
    )
}