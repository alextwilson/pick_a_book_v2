import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Book from "./book";
import Books from "./books"
import Home from "./home"
import LogIn from "./logIn"
import NewBook from "./newBook"
import SignUp from "./signUp"

class BookListing extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <strong className="title">{this.props.title}</strong>
              <i className="author"> By {this.props.author}</i>
              <Link to={`/books/${this.props.id}`}>Show</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = BookListing;
