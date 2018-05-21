import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className="Book">
    	  <img className="Book-image" src={this.props.book.image} alt="Title of the book"/>
        <div className="Book-options">
          <select>
            <option value="none" disabled>Move to...</option>
            <option value="reading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read" onClick={() => this.props.addBook(this.props.book)}>Read</option>
            <option value="none">None</option>
          </select>
        </div>
        <p className="Book-title">{this.props.book.title}</p>
        <p className="Book-author">{this.props.book.author}</p>
      </div>
    );
  }
}

export default Book;
