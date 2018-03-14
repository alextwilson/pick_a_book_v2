import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter, Redirect } from "react-router-dom";

class LogOut extends React.Component {
  constructor() {
    super();
    this.state = { username: ""};
  };

  componentWillMount() {
    this.setState({ username: sessionStorage.getItem("username") });
    sessionStorage.clear();
  };

  render() {
    return(
      <div>
        <h3> Goodbye {this.state.username}!</h3>
      </div>
    );
  };
};

module.exports = LogOut;
