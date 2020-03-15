import React from "react";
import { connect } from "react-redux";
import { createComment } from "../actions/actions";
import CommentForm from "./CommentForm";
import CommentSection from "./CommentSection";

class CommentContainer extends React.Component {
  state = { comment: "", imageId: null };

  onSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state.comment, this.props.imageId);
    this.setState({ comment: "", imageId: null });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <CommentForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          comment={this.state.comment}
        />
        <CommentSection imageId={this.props.imageId} />
      </div>
    );
  }
}

export default connect(null, {
  createComment
})(CommentContainer);
