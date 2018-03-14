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
                <img id="image" height="100" width="85" src={this.props.imageurl} />
                <strong className="title">  {this.props.title}</strong>
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
    const arr = this.state.books.reverse()
    const posts = arr.map((book, index) => (
      <BookListing
        key={index}
        id={book.id}
        title={book.title}
        author={book.author}
        imageurl={book.imageurl}
      />
    ));

    return (
      <div>
        <h3>All books</h3>
        <h4>There are {arr.length} books available</h4>
        {posts}
      </div>
    );
  }
}

module.exports = Books;
