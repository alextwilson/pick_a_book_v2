import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class SignUp extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "api/users",
      data: {
        user: {
          email: this.refs.email.value,
          username: this.refs.username.value,
          password: this.refs.password.value,
          password_confirmation: this.refs.password.value
        }
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
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
              ref="username"
              type="text"
              placeholder="Username"
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
          <div className="field">
            <input
              ref="password_confirmation"
              type="text"
              placeholder="Password Confirmation"
              required={true}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <Router>
          <Link to="/">Home</Link>
        </Router>
      </div>
    );
  }
}

module.exports = SignUp;
