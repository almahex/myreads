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

  setShelf(result) {
    result.forEach(e => {
      if (this.props.books.indexOf(e) === -1) {
        e.shelf = "none"
      } else {
        e.shelf = this.props.books.indexOf(e).shelf
      }
    })
    return result
  }

  //Gets the user's query and calls the BooksAPI in order to handle the response
  updateQuery = (query) => {
    this.setState({ query: query })
    if (query.trim()) {
      BooksAPI.search(query.trim())
      .then(result => {
        if (result instanceof Array && result.length > 0) {
          const validatedResult = this.setShelf(result)
          console.log(validatedResult)
          this.setState({result: validatedResult})       
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
          <Link className="Back-home" to="/">◀</Link>
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
