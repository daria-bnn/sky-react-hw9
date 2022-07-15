import { useState } from 'react'

import booksStub from './data/booksData'
import BookCart from './BookCart/BookCart'
import TotalCost from './TotalCost/TotalCost'

const BasketBooks = () => {
  const [books, setBooks] = useState(booksStub())

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  const setQuatinty = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }

  return (
    <div>
      <h1>books list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
          {books.map((book, index) => (
            <BookCart
              book={book}
              index={index}
              key={book.id}
              setQuatinty={setQuatinty}
              deleteBook={deleteBook}
            />
          ))}
          <TotalCost books={books} />
        </tbody>
      </table>
    </div>
  )
}

export default BasketBooks
