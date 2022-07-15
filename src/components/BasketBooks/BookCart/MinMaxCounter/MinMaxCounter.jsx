import PropTypes from 'prop-types'
import checkValue from './utils/checkValue'

const MinMaxCounter = ({ id, min, max, current, setQuatinty }) => {
  const validate = (event) => {
    const { value } = event.target
    setQuatinty(id, checkValue(value, min, max))
  }

  const increase = () => {
    if (current >= max || typeof current !== 'number') return

    setQuatinty(id, current + 1)
  }

  const decrease = () => {
    if (current === min || typeof current !== 'number') return

    setQuatinty(id, current - 1)
  }

  return (
    <div>
      <button type="button" onClick={decrease}>
        -
      </button>
      <input onChange={validate} value={current} />
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
