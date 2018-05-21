import React, { Component } from 'react';
import Book from './Book'

class ReadStateRow extends Component {
  render() {
    return (
      <div className="Read-state-row">
    	<h2 className="Read-state-row-title">{this.props.readState}</h2>
    	<ul className="Books-list">
        {this.props.books.map((books) => (
        <li key={books.title}>
          <Book book={books} addBook={this.props.addBook}/>
        </li>          
        ))}
    	</ul>
      </div>
    );
  }
}

export default ReadStateRow;