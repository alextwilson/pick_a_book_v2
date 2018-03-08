import "phoenix_html"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from "axios"

class HelloReact extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/books/new" component={NewBook}/>
      </div>
      </Router>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to PickABook!</h1>

        <Link to="/books/new">Add a book</Link>
      </div>
    )
  }
}

class NewBook extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      genre: '',
      description: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state = {
      title: this.refs.title.value,
      author: this.refs.author.value,
      genre: this.refs.genre.value,
      description: this.refs.description.value
    };
    console.log(this.state);
    axios({
      method: 'post',
      headers: {"Content-Type": "application/json"},
      url: '/api/books',
      data: {
        book: {
          title: this.state.title,
          author: this.state.author,
          genre: this.state.genre,
          description: this.state.description
        }
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Add a book</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <input ref="title" type="text" placeholder="Title" required={true} />
          </div>
          <div className="field">
            <input ref="author" type="text" placeholder="Author" required={true} />
          </div>
          <div className="field">
            <input ref="genre" type="text" placeholder="Genre" required={true} />
          </div>
          <div className="field">
            <input ref="description" type="text" placeholder="Description" required={true} />
          </div>
          <button type="submit">Add book</button>
        </form>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloReact/>,
  document.getElementById("main")
)
