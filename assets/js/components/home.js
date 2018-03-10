class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to PickABook!</h1>
        <Router>
          <Link to="/books">All books</Link>
        </Router>
        <Router>
          <Link to="/books/new">Add a book</Link>
        </Router>
      </div>
    )
  }
}
