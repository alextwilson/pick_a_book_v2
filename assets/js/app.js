import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class HelloReact extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Book} />
          <Route exact path="/books/new" component={NewBook} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to PickABook!</h1>
          <Link to="/books">All books</Link>
          <Link to="/books/new">Add a book</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
      </div>
    )
  }
};


class BookListing extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <strong className="title">{this.props.title}</strong>
              <i className="author"> By {this.props.author}</i>
              <Link to={`/books/${this.props.id}`}>Show</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Books extends React.Component {
  constructor() {
    super();
    this.state = { books: [] };
  }

  componentWillMount() {
    axios
      .get("http://localhost:4000/api/books")
      .then(response => {
        this.setState({ books: response.data.books });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const posts = this.state.books.map((book, index) => (
      <BookListing
        key={index}
        id={book.id}
        title={book.title}
        description={book.description}
        genre={book.genre}
        author={book.author}
      />
    ));

    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/books/new">Add a book</Link>
        {posts}
      </div>
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

class LogIn extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "api/users",
      data: {
        user: {
          email: this.refs.email.value,
          password: this.refs.password.value
        }
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <input
              ref="email"
              type="text"
              placeholder="Email"
              required={true}
            />
          </div>
          <div className="field">
            <input
              ref="password"
              type="text"
              placeholder="Password"
              required={true}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <Router>
          <Link to="/">Home</Link>
        </Router>
      </div>
    );
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
        <Router>
          <Link to="/">Home</Link>
        </Router>
      </div>
    );
  }
}

class SignUp extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "api/users",
      data: {
        user: {
          email: this.refs.email.value,
          username: this.refs.username.value,
          password: this.refs.password.value,
          password_confirmation: this.refs.password.value
        }
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <input
              ref="email"
              type="text"
              placeholder="Email"
              required={true}
            />
          </div>
          <div className="field">
            <input
              ref="username"
              type="text"
              placeholder="Username"
              required={true}
            />
          </div>
          <div className="field">
            <input
              ref="password"
              type="text"
              placeholder="Password"
              required={true}
            />
          </div>
          <div className="field">
            <input
              ref="password_confirmation"
              type="text"
              placeholder="Password Confirmation"
              required={true}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <Router>
          <Link to="/">Home</Link>
        </Router>
      </div>
    );
  }
}


ReactDOM.render(
  <HelloReact/>,
  document.getElementById("main")
)

// module.exports = HelloReact;
