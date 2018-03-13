import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class LogIn extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "api/sign_in",
      data: {
        email: this.refs.email.value,
        password: this.refs.password.value
      }
    })
    .then(response => {
      sessionStorage.setItem('jwt', response.data.jwt);
    })
    .then(token => {
      const AUTH_STRING = 'Bearer '.concat(sessionStorage.getItem('jwt'));
      axios({
        method: "get",
        headers: { "Content-Type": "application/json", "Authorization": AUTH_STRING },
        url: "api/my_user"
      })
      .then(userResponse => {
        sessionStorage.setItem('username', userResponse.data.username);
        sessionStorage.setItem('userId', userResponse.data.id);
        sessionStorage.setItem('email', userResponse.data.email);
        console.log(sessionStorage);
      })
    })
    .catch(error => {
      console.log(error);
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
              type="password"
              placeholder="Password"
              required={true}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

module.exports = LogIn;
