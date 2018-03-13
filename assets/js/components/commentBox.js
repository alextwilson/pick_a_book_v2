import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Redirect } from "react-router-dom";
import axios from "axios";

class CommentForm extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: 0
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "/api/books",
      data: {
        comment: {
          author: this.refs.author_comment.value,
          body: this.refs.body_comment.value
        }
      }
    });

    let author = this.author_comment;
    let body = this.body_comment;

    if (!author.value || !body.value) {
      alert("Please enter your name and comment");
      return;
    }

    this.props.addComment(author.value, body.value);

    this.author.value = "";
    this.body.value = "";
    this.setState({ characters: 0 });
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <h3>Join the discussion</h3>
        <div className="comment-form-fields">
          <input
            className="form-control"
            placeholder="Name:"
            ref={input => (this.author = input)}
          />
          <br />
          <br />
          <textarea
            className="form-control"
            placeholder="Comment:"
            ref={textarea => (this.body = textarea)}
            onKeyUp={this.getCharacterCount}
          />
          <div className="text-xs-right">
            <span className="label label-pill label-default">
              {this.state.characters}
            </span>
          </div>
        </div>
        <div className="comment-form-actions">
          <button type="submit" className="btn btn-primary btn-block">
            Post comment
          </button>
        </div>
      </form>
    );
  }

  functiongetCharacterCount() {
    this.setState({
      characters: this._body.value.length
    });
  }
}

class Comment extends React.Component {
  handleDelete(ev) {
    ev.preventDefault();
    if (confirm("Delete this comment?")) {
      this.props.onDelete(this.props);
    }
  }
  render() {
    return (
      <div className="comment card">
        <div className="card-block">
          <h5 className="card-title">
            <span className="avatar">
              <img src={this.props.avatarUrl} className="img-fluid" />
            </span>
            <span className="comment-author">{this.props.author}</span>
          </h5>
          <p className="comment-body card-text">{this.props.body}</p>
        </div>
        <div className="card-footer">
          <a href="#" onClick={this.handleDelete}>
            <small>Delete comment</small>
          </a>
        </div>
      </div>
    );
  }
}

class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [],
      characters: 0
    };
  }
  componentWillMount() {
    this.fetchComments();
  }

  componentDidMount() {
    // this._timer = setInterval(() => this.fetchComments(), 10000);
  }

  render() {
    const comments = this.getComments();
    let commentNodes;
    let buttonText = "Show comments";

    if (this.state.showComments) {
      buttonText = "Hide comments";
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return (
      <div className="comment-box m-b-2">
        <CommentForm addComment={this.addComment} />
        <div>
          <h3>Comments</h3>
          <div className="m-b-2">
            <h4 className="comment-count">{comments.length} comments</h4>
            <button
              className="btn btn-secondary btn-sm"
              onClick={this.handleClick}
            >
              {buttonText}
            </button>
          </div>
          {commentNodes}
        </div>
      </div>
    );
  }

  fetchComments() {
    axios({
      url: this.props.apiUrl,
      method: "GET",
      dataType: "json",
      success: comments => {
        this.setState({
          comments
        });
      }
    });
  }

  getComments() {
    return this.state.comments.map(comment => (
      <Comment
        {...comment}
        key={comment.id}
        onDelete={this._deleteComment.bind(this)}
      />
    ));
  }

  handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  addComment(author, body) {
    let comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };

    $.ajax({
      url: "/api/comments",
      method: "POST"
    });

    this.setState({
      comments: this.state.comments.concat(comment)
    });
  }

  _deleteComment(comment) {
    $.ajax({
      url: `/api/comments/${this.props.match.params.id}`,
      method: "DELETE"
    });

    const comments = this.state.comments.filter(cmt => cmt.id !== comment.id);

    this.setState({ comments });
  }
}

// ReactDOM.render(
//  <CommentBox />, document.getElementById('comment-box1')
// );
module.exports = CommentBox;
