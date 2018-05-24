import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class ReadStateRow extends Component {
  static propTypes = {
    readState: PropTypes.string.isRequired,
    readStateValue: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  //Renders the name of the state of reading and the books that belong to that state
  render() {
    const { readState, readStateValue, books, changeShelf } = this.props
    return (
      <div className="Read-state-row">
      	<h2 className="Read-state-row-title">{readState}</h2>
        <ul className="Books-list">
        {readStateValue === "" && (
          books.map((book) => (
            <li key={book.id}>
              <Book book={book} changeShelf={changeShelf}/>
            </li>
          ))
        )}
        {readStateValue !== "" && (
          books.filter((b) => b.shelf === readStateValue).map((book) => (
            <li key={book.id}>
              <Book book={book} changeShelf={changeShelf}/>
            </li>
          ))
        )}
        </ul>
      </div>
    );
  }
}

export default ReadStateRow;