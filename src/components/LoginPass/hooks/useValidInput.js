import { useEffect, useState } from 'react'

const REG_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const useValidInput = (initValue, rules, dirty) => {
  const [error, setError] = useState()

  useEffect(() => {
    if (!dirty) return

    if (!initValue && rules.isEmpty) {
      setError('Поле не может быть пустым')
      return
    }

    if (rules.isValidEmail && !initValue.match(REG_EMAIL)) {
      setError('Неккоректный email')
      return
    }

    if (rules.isLength && initValue.length < rules.isLength) {
      setError(`Поле должно содержать более ${rules.isLength} символов`)
      return
    }

    setError('')
  }, [initValue, dirty])

  return error
}

export default useValidInput
