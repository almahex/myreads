import React from 'react';
import { Link } from 'react-router-dom'
import ReadStateRow from './ReadStateRow'

//Renders every shelf given the name of the shelf
function BookShelf (props) {
  return (
      <div className="Book-shelf">
        <ReadStateRow readState="Currently Reading" readStateValue="currentlyReading" books={props.books} changeShelf={props.changeShelf}/>
        <ReadStateRow readState="Want to read" readStateValue="wantToRead" books={props.books} changeShelf={props.changeShelf}/>
        <ReadStateRow readState="Read" readStateValue="read" books={props.books} changeShelf={props.changeShelf}/>
        <Link className="Search-book" to="/search"><span role="img" aria-label="See options">&#128269;</span></Link>
      </div>
  )
}

export default BookShelf;
