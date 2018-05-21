import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {

    return (
      <div className="Search-books">
        <div className="Search-bar">
          <Link className="Back-home" to="/">◀</Link>
          <input type='text' placeholder='Search book for title or author name' value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
        </div>
        <div className="Show-search">
          <ul>Book 1
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
