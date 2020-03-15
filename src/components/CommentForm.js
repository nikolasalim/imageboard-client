import React from "react";

class CommentForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          name="comment"
          value={this.props.comment}
          onChange={this.props.onChange}
          placeholder="Comment"
        ></input>
        <button type="submit">Comment</button>
      </form>
    );
  }
}

export default CommentForm;
