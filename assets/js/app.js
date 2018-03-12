import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Book from "./components/book";
import BookListing from "./components/bookListing";
import Books from "./components/books"
import Home from "./components/home"
import LogIn from "./components/logIn"
import NewBook from "./components/newBook"
import SignUp from "./components/signUp"

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Book} />
          <Route exact path="/books/new" component={NewBook} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById("main")
)
