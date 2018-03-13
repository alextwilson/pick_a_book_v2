import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to PickABook!</h1>
        <Link to="/books">All books</Link>
        <Link to="/book/new">Add a book</Link>
      </div>
    );
  }
}

module.exports = Home;
