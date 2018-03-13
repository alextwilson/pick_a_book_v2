import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from "axios";

class NewBook extends React.Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ fireRedirect: true });
    axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "/api/books",
      data: {
        book: {
          title: this.refs.title.value,
          author: this.refs.author.value,
          genre: this.refs.genre.value,
          description: this.refs.description.value
        }
      }
    });
  }

  render() {
    const { from } = this.props.location.state || "/";
    const { fireRedirect } = this.state;
    return (
      <div>
        <h1>Add a book</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <input
              ref="title"
              type="text"
              placeholder="Title"
              required={true}
            />
          </div>
          <div className="field">
            <input
              ref="author"
              type="text"
              placeholder="Author"
              required={true}
            />
          </div>
          <div className="field">
            <input
              ref="genre"
              type="text"
              placeholder="Genre"
              required={true}
            />
          </div>
          <div className="field">
            <input
              ref="description"
              type="text"
              placeholder="Description"
              required={true}
            />
          </div>
          <button type="submit">Add book </button>
        </form>
        {fireRedirect && <Redirect to={from || "/books/"} />}
        <Link to="/">Home</Link>
      </div>
    );
  }
}

module.exports = NewBook;
