import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/home";
import NewBook from "./components/newBook";

class HelloReact extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Book} />
          <Route exact path="/books/new" component={NewBook} />
        </div>
      </Router>
    );
  }
}

class Book extends React.Component {
  constructor() {
    super();
    this.state = { book: [] };
  }

  componentDidMount() {
    axios
      .get(`/api/books/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ book: response.data.book });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <p>
          <Link to="/">Home</Link> | <Link to="/books">All books</Link> |{" "}
          <Link to="/books/new">Add a book</Link>
        </p>
        <p>
          <strong>Title:</strong> {this.state.book.title}
        </p>
        <p>
          <strong>Author:</strong> {this.state.book.author}
        </p>
        <p>
          <strong>Genre:</strong> {this.state.book.genre}
        </p>
        <p>
          <strong>Description:</strong> {this.state.book.description}
        </p>
      </div>
    );
  }
}

// ReactDOM.render(
//   <HelloReact/>,
//   document.getElementById("main")
// )

module.exports = HelloReact;
