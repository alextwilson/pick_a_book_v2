import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to PickABook!</h1>
        {sessionStorage.getItem('username') &&
          <h3>
            Hello {sessionStorage.getItem('username')}!
          </h3>
        }
        <Link to="/books">All books |</Link>
        <Link to="/books/new"> Add a book |</Link>
        <Link to="/signup"> Sign Up |</Link>
        <Link to="/login"> Log In</Link>
      </div>
    );
  }
}

module.exports = Home;
