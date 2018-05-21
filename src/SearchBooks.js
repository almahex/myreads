import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ReadStateRow from './ReadStateRow'

class SearchBooks extends Component {
  state = {
    query: '',
    result: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    BooksAPI.search(query)
    .then(result => {
      if (result instanceof Array) {
        this.setState({result})       
      } else {
        this.setState({result: []})
      }
    })
  }

  clearQuery = () => {
    this.setState({ query: "" })
  }

  render() {

    return (
      <div className="Search-books">
        <div className="Search-bar">
          <Link className="Back-home" to="/">◀</Link>
          <input type='text' placeholder='Search by title or author' value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
        </div>
        <div className="Show-search">
          <ReadStateRow readState="" books={this.state.result} addBook={this.props.addBook}/>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
