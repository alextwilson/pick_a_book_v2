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
        <Route exact path="/books" component={Books}/>
        <Route exact path="/books/new" component={NewBook}/>
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
        <Link to="/books">All books</Link>
        <Link to="/books/new">Add a book</Link>
      </div>
    )
  }
}

class NewBook extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'post',
      headers: {"Content-Type": "application/json"},
      url: '/api/books',
      data: {
        book: {
          title: this.refs.title.value,
          author: this.refs.author.value,
          genre: this.refs.genre.value,
          description: this.refs.description.value
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

class BookListing extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <strong className="title">{this.props.title}</strong>
              <i className="author"> By {this.props.author}</i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Books extends React.Component {
  constructor() {
    super();
    this.state = { books: [] };
  }

  componentWillMount() {
    axios.get('http://localhost:4000/api/books')
      .then(response => {
        this.setState({ books: response.data.books });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const posts = this.state.books.map((book, index) =>
      <BookListing
        key = { index }
        id = { book.id }
        title = { book.title }
        description = { book.description }
        genre = { book.genre }
        author = { book.author }
      />
    );
    console.log(posts)

    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/books/new">Add a book</Link>
        {posts}
      </div>
    )
  }
}

ReactDOM.render(
  <HelloReact/>,
  document.getElementById("main")
)
