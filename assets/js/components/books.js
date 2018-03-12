import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class BookListing extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p>
                <strong className="title">{this.props.title}</strong>
                <i className="author"> By {this.props.author}</i> |{" "}
                <Link to={`/books/${this.props.id}`}>Show</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
        author={book.author}
      />
    ));

    return (
      <div>
        <p>
          <Link to="/">Home</Link> | <Link to="/books/new">Add a book</Link>
        </p>
        {posts}
      </div>
    );
  }
}

module.exports = Books;
