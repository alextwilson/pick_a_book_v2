import React from 'react'
import ReactDOM from "react-dom"

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

module.exports = Home;
