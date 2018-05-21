import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    addBook: PropTypes.func.isRequired
  }

  render() {
    const imageThumb = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : null;
    return (
      <div className="Book">
    	  <img className="Book-image" src={imageThumb} alt="Title of the book"/>
        <div className="Book-options">
          <select onClick={(e) => this.props.addBook(this.props.book, e.target.value)}>
            <option value="none" disabled>Move to...</option>
            <option value="reading">Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="alreadyRead">Already Read</option>
            <option value="none">None</option>
          </select>
        </div>
        <p className="Book-title">{this.props.book.title}</p>
        <p className="Book-author">{this.props.book.authors}</p>
      </div>
    );
  }
}

export default Book;
