import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Book from "./book";
import Books from "./books"
import Home from "./home"
import NewBook from "./newBook"
import SignUp from "./signUp"

class LogIn extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "api/users",
      data: {
        user: {
          email: this.refs.email.value,
          password: this.refs.password.value
        }
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <input
              ref="email"
              type="text"
              placeholder="Email"
              required={true}
            />
          </div>
          <div className="field">
            <input
              ref="password"
              type="text"
              placeholder="Password"
              required={true}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <Router>
          <Link to="/">Home</Link>
        </Router>
      </div>
    );
    // return (
    // <div>
    //   <h1>Welcome to PickABook!</h1>
    //   <Router>
    //     <Link to="/books">All books</Link>
    //   </Router>
    //   <Router>
    //     <Link to="/books/new">Add a book</Link>
    //   </Router>
    // </div>
    // )
  }
}

module.exports = LogIn;
