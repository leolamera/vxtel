import { useEffect, useState } from 'react'
import { useField } from '@unform/core'
import { CheckBox } from '../../styles/RadioInput'

export default function RadioInput({ name }) {

    // Bussines Rules
    const DDDRelationship = {
        "011": ["016", "017", "018"],
        "016": ["011"],
        "017": ["011"],
        "018": ["011"]
    }

    // States
    const [originPhone, setoriginPhone] = useState("011")

    const [fatePhone, setfatePhone] = useState("016")

    const DDDObject = {
        value: {
            originPhone,
            fatePhone
        }
    }
    
    // Set UnForm Fields
    const { fieldName, registerField } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: DDDObject,
            path: 'value'
        }) 
    }, [fieldName, registerField, onChangeOrigin, onChangeFate])

    // onChange Functions
    function onChangeOrigin(event) {
        setoriginPhone(event.target.value)
    }

    function onChangeFate(event) {
        setfatePhone(event.target.value)
    }

    // HTML render
    return (
        <div style={{flex: 1, flexDirection: 'row'}}>
             <CheckBox>
                 <h2>DDD de Origem</h2>
                    <label>
                        <input type="radio"
                            value="011"
                            onClick={onChangeOrigin}
                            checked={originPhone === "011"}
                            />
                        011
                    </label>
                    <label>
                        <input type="radio"
                            value="016"
                            onClick={onChangeOrigin}
                            checked={originPhone === "016"}
                            />
                        016
                    </label>
                    <label>
                        <input type="radio"
                            value="017"
                            onClick={onChangeOrigin}
                            checked={originPhone === "017"}
                            />
                        017
                    </label>
                    <label>
                        <input type="radio"
                            value="018"
                            onClick={onChangeOrigin}
                            checked={originPhone === "018"}
                            />
                        018
                    </label>
            </CheckBox>
            <CheckBox>
            <h2>DDD de Destino</h2>
                <label>
                    <input type="radio"
                            value="011"
                            onClick={onChangeFate}
                            checked={fatePhone === "011" && DDDRelationship[originPhone].includes("011")}
                            disabled={!DDDRelationship[originPhone].includes("011")}

                            />
                011
                </label>
                <label>
                    <input type="radio"
                            value="016"
                            onClick={onChangeFate}
                            checked={fatePhone === "016" && DDDRelationship[originPhone].includes("016")}
                            disabled={!DDDRelationship[originPhone].includes("016")}

                            />
                016
                </label>
                <label>
                    <input type="radio"
                            value="017"
                            onClick={onChangeFate}
                            checked={fatePhone === "017" && DDDRelationship[originPhone].includes("017")}
                            disabled={!DDDRelationship[originPhone].includes("017")}

                            />
                017
                </label>
                <label>
                    <input type="radio"
                            value="018"
                            onClick={onChangeFate}
                            checked={fatePhone === "018" && DDDRelationship[originPhone].includes("018")}
                            disabled={!DDDRelationship[originPhone].includes("018")}
                            />
                018
                </label>
            </CheckBox>
        </div>
    )
}