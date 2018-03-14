import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter, Redirect } from "react-router-dom";
import axios from "axios";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "api/sign_up",
      data: {
        user: {
          email: this.refs.email.value,
          username: this.refs.username.value,
          password: this.refs.password.value,
          password_confirmation: this.refs.password.value
        }
      }
    })
      .then(response => {
        sessionStorage.setItem("jwt", response.data.jwt);
      })
      .then(token => {
        const AUTH_STRING = "Bearer ".concat(sessionStorage.getItem("jwt"));
        axios({
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: AUTH_STRING
          },
          url: "api/my_user"
        }).then(userResponse => {
          sessionStorage.setItem("username", userResponse.data.username);
          sessionStorage.setItem("userId", userResponse.data.id);
          sessionStorage.setItem("email", userResponse.data.email);
          this.setState({ fireRedirect: true });
        });
      })
      .catch(error => {
        sessionStorage.setItem("signupFailed", "true");
        console.log(error);
        this.forceUpdate();
      });
  }

  render() {
    const { from } = this.props.location.state || "/";
    const { fireRedirect } = this.state;
    return (
      <div>
        <h3>Sign up</h3>
        {sessionStorage.getItem("signupFailed") && (
          <h4>
            Unable to register a new account. Please check your email address is
            correct and your password is over 4 characters long!
          </h4>
        )}
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
              type="password"
              placeholder="Password"
              required={true}
            />
          </div>
          <div className="field">
            <input
              ref="password_confirmation"
              type="password"
              placeholder="Password Confirmation"
              required={true}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {fireRedirect && <Redirect to={from || "/"} />}
      </div>
    );
  }
}

module.exports = SignUp;
