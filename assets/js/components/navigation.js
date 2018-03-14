import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <h1>PickABook</h1>
        <Link to="/">Home |</Link>
        <Link to="/books"> All books |</Link>
        <Link to="/book/new"> Add a book |</Link>
        <Link to="/signup"> Sign Up |</Link>
        <Link to="/login"> Log In |</Link>
        <Link to="/logout"> Log Out</Link>
      </div>
    );
  }
}

module.exports = Navigation;
