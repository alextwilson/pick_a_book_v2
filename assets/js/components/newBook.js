import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { BrowserRouter, Redirect} from "react-router-dom";
import axios from "axios";
import Button from "./styled/button";

class NewBook extends React.Component {
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
      url: "/api/books",
      data: {
        book: {
          title: this.refs.title.value,
          author: this.refs.author.value,
          genre: this.refs.genre.value,
          description: this.refs.description.value,
          imageurl: this.refs.imageurl.value
        }
      }
    })
    .then(redirect => {
      this.setState({ fireRedirect: true });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const { from } = this.props.location.state || "/";
    const { fireRedirect } = this.state;
    return (
      <div>
        <h3>Add a book</h3>
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
              id="textbox"
              ref="description"
              type="text"
              placeholder="Description"
              required={true}
            />
          </div>
          <div className="field">
            <input
              size="15"
              ref="imageurl"
              type="text"
              placeholder="Image URL"
              required={true}
              />
          </div>
          <Button type="submit">Add book </Button>
        </form>
        {fireRedirect && <Redirect to={from || "/books/"} />}
      </div>
    );
  }
}

module.exports = NewBook;
