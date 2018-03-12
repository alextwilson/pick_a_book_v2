import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import BookListing from "./bookListing";

class Books extends React.Component {
  constructor() {
    super();
    this.state = { books: [] };
  }

  componentWillMount() {
    axios
      .get("http://localhost:4000/api/books")
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
