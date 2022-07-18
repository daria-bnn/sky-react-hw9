import { useState } from 'react'

import useValidInput from './useValidInput'

const useGetInput = (initValue, rules) => {
  const [value, setValue] = useState(initValue)
  const [dirty, setDurty] = useState(false)

  const valid = useValidInput(value, rules, dirty)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onBlur = () => {
    setDurty(true)
  }

  return {
    value,
    onChange,
    onBlur,
    dirty,
    valid,
  }
}

export default useGetInput
