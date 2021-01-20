import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { MinutesBox } from '../../styles/MinutesInput'

export default function MinutesInput({ name }) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return(
    <MinutesBox>
      <h2>Minutos por Mês</h2>
      <input ref={inputRef} defaultValue="120" min="1"/>
    </MinutesBox>
  )
}