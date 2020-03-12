import React from "react";
import CreateFormContainer from "../components/CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";
import { Link } from "react-router-dom";

class List extends React.Component {
  timeSince = dateUnformated => {
    const date = new Date(dateUnformated);

    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };

  render() {
    if (!this.props.images) {
      return <h1>Loading...</h1>;
    }

    if (!this.props.user) {
      return (
        <div>
          <SignupFormContainer />
          <LoginFormContainer user={this.props.user} />
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/user"> See all users</Link>
          <CreateFormContainer />
          {this.props.images.map(image => (
            <div key={image.id}>
              <h3>{image.title}</h3>
              <img src={image.url} style={{ maxWidth: "200px" }}></img>
              <div>Posted {this.timeSince(image.createdAt)} ago.</div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default List;
