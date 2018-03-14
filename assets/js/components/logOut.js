import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter, Redirect } from "react-router-dom";

class LogOut extends React.Component {
  constructor() {
    super();
  };

  componentWillMount() {
    sessionStorage.clear();
  };

  render() {
    return(
      <div>
        <Redirect to="/" />
      </div>
    );
  };
};

module.exports = LogOut;
