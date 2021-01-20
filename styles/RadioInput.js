import styled from 'styled-components'

module.exports.CheckBox = styled.div`
    margin-left: 42%;
    height: 240px;
    width: 240px;
    background-color: white;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    border-radius: 6px;

    h2 {
        color: #52616B;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        font-style: normal;
        font-size: 16px;
    }

    label {
        color: #52616B;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        font-style: normal;
        font-size: 20px;
        margin-left: 30px;
        margin-top: 20px;
        display: flex;
    }

    input {
        line-height: 10px;
        margin-right: 10px;
        width: 20px;
        height: 20px;
        border: 0.1em solid;

    }
`