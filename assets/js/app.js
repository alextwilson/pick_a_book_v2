import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Book from "./components/book";
import Books from "./components/books";
import Home from "./components/home";
import LogIn from "./components/logIn";
import NewBook from "./components/newBook";
import SignUp from "./components/signUp";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Book} />
          <Route exact path="/book/new" component={NewBook} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("main"));
