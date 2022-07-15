import PropTypes from 'prop-types'

import MinMaxCounter from './MinMaxCounter/MinMaxCounter'

const BookCart = ({ book, index, setQuatinty, deleteBook }) => {
  const { id, title, price, quantity, rest } = book

  return (
    <tr>
      <td>{index + 1} </td>
      <td>{title} </td>
      <td>{price} </td>
      <td>
        <MinMaxCounter
          max={rest}
          min={1}
          current={quantity}
          setQuatinty={setQuatinty}
          id={id}
        />
      </td>
      <td>{quantity * price}</td>
      <td>
        <button type="button" onClick={() => deleteBook(id)}>
          Удалить
        </button>
      </td>
    </tr>
  )
}

BookCart.propTypes = {
  index: PropTypes.number.isRequired,
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    rest: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  setQuatinty: PropTypes.func.isRequired,
}

export default BookCart
