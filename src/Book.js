import React, { Component } from 'react';
import PropTypes from 'prop-types'
import defaultImage from './icons/portadaNAV.gif'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  //Renders each book with a select menu with the options of changing the state of the book at any time
  //It also handles when the books passed have no image, title or authors.
  render() {
    const { book, changeShelf } = this.props
    const image = book.imageLinks ? book.imageLinks.thumbnail : defaultImage
    const title = book.title ? book.title : null
    const authors = book.authors ? book.authors : null

    return (
      <div className="Book">
    	  <img className="Book-image" src={image} alt={book.title}/>
        <div className="Book-options">
          <select value={book.shelf} onChange={(e) => changeShelf(book, e.target.value)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
        <p className="Book-title">{title}</p>
        <p className="Book-author">{authors}</p>
      </div>
    );
  }
}

export default Book;
