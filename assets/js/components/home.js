import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>Welcome to PickABook!</h3>
        {sessionStorage.getItem("username") && (
          <h3>Hello {sessionStorage.getItem("username")}!</h3>
        )}
      </div>
    );
  }
}

module.exports = Home;
