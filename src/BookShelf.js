import React from 'react';
import { Link } from 'react-router-dom'
import ReadStateRow from './ReadStateRow'


function BookShelf (props) {
  return (
      <div className="Book-shelf">
        <ReadStateRow readState="Reading" books={props.books.reading} addBook={props.addBook}/>
        <ReadStateRow readState="Want to read" books={props.books.wantToRead} addBook={props.addBook}/>
        <ReadStateRow readState="Already read" books={props.books.alreadyRead} addBook={props.addBook}/>
        <Link className="Search-book" to="/search"><span role="img" aria-label="See options">&#128269;</span></Link>
      </div>
  )
}

export default BookShelf;
