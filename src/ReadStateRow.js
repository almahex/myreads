import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class ReadStateRow extends Component {
  static propTypes = {
    readState: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    addBook: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="Read-state-row">
    	<h2 className="Read-state-row-title">{this.props.readState}</h2>
    	<ul className="Books-list">
        {this.props.books.map((book) => (
          <li key={book.title}>
            <Book book={book} addBook={this.props.addBook}/>
          </li>
        ))}
    	</ul>
      </div>
    );
  }
}

export default ReadStateRow;