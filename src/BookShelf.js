import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ReadStateRow from './ReadStateRow'

class BookShelf extends Component { 

  render() {
    return (
      <div className="Book-shelf">
        <ReadStateRow readState="Reading" books={this.props.books.reading} addBook={this.props.addBook}/>
        <ReadStateRow readState="Want to read" books={this.props.books.wantToRead} addBook={this.props.addBook}/>
        <ReadStateRow readState="Already read" books={this.props.books.alreadyRead} addBook={this.props.addBook}/>
        <Link className="Search-book" to="/search"><span role="img" aria-label="See options">&#128269;</span></Link>
      </div>
    );
  }
}

export default BookShelf;
