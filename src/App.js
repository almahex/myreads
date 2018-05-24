import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'

class App extends Component {

  //All the books classified in reading, want to read or already read
  state = {
    books: [] 
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      book.shelf = shelf;
      this.setState((state) => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
    .catch((error) => {
      console.log(error)
    })   
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({books})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  //Renders the main page which is composed by: header, a bookshelf if we are home ("/") or
  //the search bar if we are in "/search" and a footer
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MyReads</h1>
        </header>
        <Route exact path="/" render={() => (
          <BookShelf books={this.state.books} changeShelf={this.changeShelf}/>
          )}
        />
        <Route path="/search" render={() => (
          <SearchBooks books={this.state.books} changeShelf={this.changeShelf}/>
          )}
        />
        <footer className="App-footer">
          <p>Copyright 2018 by Sara Garci. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
