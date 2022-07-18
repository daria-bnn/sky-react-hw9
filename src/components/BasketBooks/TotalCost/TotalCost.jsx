import PropTypes from 'prop-types'

const TotalCost = ({ books }) => {
  const sum = books.reduce(
    (previosValue, book) => previosValue + book.quantity * book.price,
    0
  )

  return (
    <tr>
      <th>Итоговая стоимость</th>
      <th>{sum}</th>
    </tr>
  )
}

TotalCost.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      rest: PropTypes.number,
      quantity: PropTypes.number,
    })
  ).isRequired,
}

export default TotalCost
