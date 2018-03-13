import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class Book extends React.Component {
  constructor() {
    super();
    this.state = { book: [] };
  }

  componentDidMount() {
    axios
      .get(`/api/books/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ book: response.data.book });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <p>
          <Link to="/">Home</Link> | <Link to="/books">All books</Link> |{" "}
          <Link to="/book/new">Add a book</Link>
        </p>
        <p>
          <strong>Title:</strong> {this.state.book.title}
        </p>
        <p>
          <strong>Author:</strong> {this.state.book.author}
        </p>
        <p>
          <strong>Genre:</strong> {this.state.book.genre}
        </p>
        <p>
          <strong>Description:</strong> {this.state.book.description}
        </p>
        <p>
        <strong>ImageURL:</strong> {this.state.book.imageurl}
        </p>
      </div>
    );
  }
}

module.exports = Book;
