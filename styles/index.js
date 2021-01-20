import styled from 'styled-components'

module.exports.Body = styled.body`
    background-color: #E5E5E5;
    display: block;
    padding: 0px;
    margin: 0px;
`
module.exports.PageTitle = styled.h1 `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
    margin-top: 41px;
    line-height: 120%;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: 34px;
    background: linear-gradient(to right, #2958E6 49.6%, #E56D29 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

module.exports.SubTitle = styled.h2`
    color: #3E3E3E;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
;
`
module.exports.SubmitButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    background-color: #E56D29;
    border: none;
    width: 240px;
    height: 25px;
    border-radius: 6px;
    margin-left: 42%;
    margin-top: 15px;
`
module.exports.PriceContainer = styled.div`
    margin-top: 25px;
    display: inline-flex;
    background-color: white;
    width: 836px;
    height: 120px;
    margin-left: 302px;
    border-radius: 6px;


    h1 {
        color: #3E3E3E;
;
        font-family: 'Montserrat', sans-serif;
        margin-left: 32px;
        padding-top: 7px;
        position: absolute;
    }

    h2 {
        margin-top: 25px;
        font-family: 'Montserrat', sans-serif;
        font-size: 17px;
        color: #52616B;
        margin-left: 45px;
        width: 110px;
        text-align: center;
    }

    h3 {
        color: #3E3E3E;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 20px;
        margin-left: 45px;
        width: 110px;
        text-align: center;
    }

`
module.exports.VerticalLine = styled.div`
    background-color: #3E3E3E;
        height: 120px;
        width: 1px;
        margin-left: 190px;
        position: absolute;
`

module.exports.EconomicFlag = styled.div`
    background-color: #E56D29;
        height: 120px;
        width: 15px;
        margin-left: 0px;
        border-radius: 6px 0px 0px 6px;
        position: absolute;
`



module.exports.InfoContainer = styled.div`
    margin-left: 175px;
    display: inline-flex;
`