import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Title from "./styled/title";

// const Title = styled.h1`
//   color: ${props => (props.primary ? "pink" : "black")};
// `;

class Home extends React.Component {
  render() {
    return (
      <div>
        <Title>Welcome to PickABook!</Title>
        {sessionStorage.getItem("username") && (
          <Title primary>Hello {sessionStorage.getItem("username")}!</Title>
        )}
        <Link to="/books">All books |</Link>
        <Link to="/book/new"> Add a book |</Link>
        <Link to="/signup"> Sign Up |</Link>
        <Link to="/login"> Log In</Link>
      </div>
    );
  }
}

module.exports = Home;
