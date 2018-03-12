import 'phoenix_html';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to PickABook!</h1>
        <p>
          <Link to="/books">All books</Link> | <Link to="/books/new">Add a book</Link>
        </p>
      </div>
    )
  }
};

module.exports = Home;
