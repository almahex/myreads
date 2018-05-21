import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MyReads</h1>
        </header>
        <Route exact path="/" component={BookShelf}/>
        <Route path="/search" component={SearchBooks}/>
        <footer className="App-footer">
          <p>Copyright 2018 by Sara Garci. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
