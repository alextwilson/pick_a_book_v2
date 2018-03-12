import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import Link from "react-router-dom";
import axios from "axios";
import Book from "./book";
import BookListing from "./bookListing";
import Home from "./home"
import LogIn from "./logIn"
import NewBook from "./newBook"
import SignUp from "./signUp"

class Books extends React.Component {
  constructor() {
    super();
    this.state = { books: [] };
  }

  componentDidMount() {
    axios
      .get("/api/books")
      .then(response => {
        this.setState({ books: response.data.books });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const posts = this.state.books.map((book, index) => (
      <BookListing
        key={index}
        id={book.id}
        title={book.title}
        description={book.description}
        genre={book.genre}
        author={book.author}
      />
    ));

    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/books/new">Add a book</Link>
        {posts}
      </div>
    );
  }
}

module.exports = Books;
