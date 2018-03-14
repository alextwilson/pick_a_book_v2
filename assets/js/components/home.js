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
          <h4>Hello {sessionStorage.getItem("username")}!</h4>
        )}
        <h4>Rather than leave your books on the shelf never to be opened again, or worse, throw them away, try swapping them using PickABook!</h4><br/>
        <p>Join today and swap books with other members of our community. PickABook helps you giving away books you no longer need in exchange for books you really want.</p>
      </div>
    );
  }
}

module.exports = Home;
