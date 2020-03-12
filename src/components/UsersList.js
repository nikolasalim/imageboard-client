import React from "react";
import { getUsers } from "../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    console.log();
    return this.props.usersList.map(user => {
      return (
        <Link to={`/user/${user.id}`}>
          <div>{user.email}</div>
        </Link>
      );
    });
  }
}

function mapStateToProps(state) {
  return { usersList: state.usersList };
}

const mapDispatchToProps = { getUsers };
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
