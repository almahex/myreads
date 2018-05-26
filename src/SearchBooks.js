import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import ReadStateRow from './ReadStateRow'

class SearchBooks extends Component {
  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  //The state of this component has the user's query when searching and the books found as a result
  state = {
    query: '',
    result: []
  }

  //Sets the corresponding value of shelf for every book
  setShelf = book => {
    const match = this.props.books.filter(b => b.id === book.id)
    if (match.length > 0) {
      book.shelf = match[0].shelf
    } else {
      book.shelf = "none"
    }
    return book
  }

  //Gets the user's query and calls the BooksAPI in order to handle the response
  updateQuery = (query) => {
    this.setState({ query: query })
    if (query) {
      BooksAPI.search(query)
      .then(result => {
        if (result instanceof Array && result.length > 0) {
          this.setState({result})
          const newBooks = this.state.result.map(this.setShelf)
          console.log(newBooks)
          this.setState({result: newBooks})
        } else {
          this.setState({result: []})
        }
      })
      .catch((error) => {
        console.log(error)
        this.setState({result: []}) 
      })
    } else {
      this.setState({result: []}) 
    }
  }

  //This component renders a link to go back home and a search bar to search for books
  //If the query is match and books are found then the component ReadStateRow is used in order
  //to display the found books but the read state passes is none
  render() {
    return (
      <div className="Search-books">
        <div className="Search-bar">
          <Link className="Back-home" to="/"></Link>
          <input type='text' placeholder='Search by title or author' value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
        </div>
        <div className="Show-search">
          <ReadStateRow readState="" readStateValue="" books={this.state.result} changeShelf={this.props.changeShelf}/>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
