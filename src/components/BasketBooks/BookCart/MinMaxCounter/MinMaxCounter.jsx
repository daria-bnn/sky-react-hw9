import PropTypes from 'prop-types'
import { useState } from 'react'
import checkValue from './utils/checkValue'

const MinMaxCounter = ({ id, min, max, current, setQuatinty }) => {
  const [valueInput, setValue] = useState(current)

  const validate = (event) => {
    const { value } = event.target

    setValue(checkValue(value, min, max))
  }

  const handleUpdateCurrent = () => {
    if (!valueInput) {
      setQuatinty(id, min)

      setValue(min)

      return
    }

    setQuatinty(id, checkValue(valueInput, min, max))
  }

  const increase = () => {
    if (current >= max || typeof current !== 'number') return

    setQuatinty(id, current + 1)
    setValue(valueInput + 1)
  }

  const decrease = () => {
    if (current === min || typeof current !== 'number') return

    setValue(valueInput - 1)

    setQuatinty(id, current - 1)
  }

  return (
    <div>
      <button type="button" onClick={decrease}>
        -
      </button>
      <input
        onChange={validate}
        value={valueInput}
        onBlur={handleUpdateCurrent}
        onKeyDown={(event) => {
          if (event.code === 'Enter') {
            handleUpdateCurrent(event)
          }
        }}
      />
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  )
}

MinMaxCounter.propTypes = {
  id: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  setQuatinty: PropTypes.func.isRequired,
}

export default MinMaxCounter
