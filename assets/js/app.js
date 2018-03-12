import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/home";
import NewBook from "./components/newBook";
import Book from "./components/book";

class HelloReact extends React.Component {
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
  <HelloReact/>,
  document.getElementById("main")
)
