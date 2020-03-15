import React from "react";
import { connect } from "react-redux";
import { getUsers, getComments } from "../actions/actions";

class CommentSection extends React.Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getComments();
  }

  render() {
    return (
      <div>
        {this.props.comments.map(comment => {
          //this.props.imageId comes from List
          if (comment.imageId === this.props.imageId) {
            return (
              <p>
                {comment.userWhoCommented} says: {comment.comment}
              </p>
            );
          }
        })}
      </div>
    );
  }
}

const mapDispatchToProps = { getUsers, getComments };

function mapStateToProps(state) {
  return { comments: state.comments, usersList: state.usersList };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
