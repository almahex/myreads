import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ReadStateRow from './ReadStateRow'

class BookShelf extends Component {
  state = {
      reading: [{
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
      },
      {
        title: "Ender's Game",
        author: "Orson Scott Card",
        image: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
      }],
      wantToRead: [{
        title: "1776",
        author: "David McCullough",
        image: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        image: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
      }],
      alreadyRead: [{
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
      },
      {
        title: "Oh, the Places You'll Go!",
        author: "Seuss",
        image: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
      },
      {
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        image: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
      }] 
    }

  findBook = (book) => {
    if (this.state.reading.filter((b) => b !== book).length < this.state.reading.length) return 'reading';
    if (this.state.wantToRead.filter((b) => b !== book).length < this.state.wantToRead.length) return 'wantToRead';
    else return 'alreadyRead';   
  }

  addBookToReading = (book, nextState) => {
    let prevState = this.findBook(book)
    if (nextState === 'none') {
      this.setState((state) => ({
        prevState: state[prevState].splice(state[prevState].indexOf(book), 1),
      }))
    } else {
      this.setState((state) => ({
        prevState: state[prevState].splice(state[prevState].indexOf(book), 1),
        nextState: state[nextState].push(book)
      }))
    }
  }

  componentWillMount() {
    localStorage.getItem('reading') && this.setState({
      reading: JSON.parse(localStorage.getItem('reading')),
      isLoading: false
    })
    localStorage.getItem('wantToRead') && this.setState({
      wantToRead: JSON.parse(localStorage.getItem('wantToRead')),
      isLoading: false
    }) 
    localStorage.getItem('alreadyRead') && this.setState({
      alreadyRead: JSON.parse(localStorage.getItem('alreadyRead')),
      isLoading: false
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('reading', JSON.stringify(nextState.reading));
    localStorage.setItem('wantToRead', JSON.stringify(nextState.wantToRead));
    localStorage.setItem('alreadyRead', JSON.stringify(nextState.alreadyRead));
  } 

  render() {
    return (
      <div className="Book-shelf">
        <ReadStateRow readState="Reading" books={this.state.reading} addBook={this.addBookToReading}/>
        <ReadStateRow readState="Want to read" books={this.state.wantToRead} addBook={this.addBookToReading}/>
        <ReadStateRow readState="Already read" books={this.state.alreadyRead} addBook={this.addBookToReading}/>
        <Link className="Search-book" to="/search"><span role="img" aria-label="See options">&#128269;</span></Link>
      </div>
    );
  }
}

export default BookShelf;
