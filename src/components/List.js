import React from "react";
import CreateFormContainer from "../components/CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";

class List extends React.Component {
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
          <CreateFormContainer />
          {this.props.images.map(image => (
            <div key={image.id}>
              <h3>{image.title}</h3>
              <img src={image.url} style={{ maxWidth: "200px" }}></img>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default List;

// If the user is not logged in, they will not be able to post the images.
// Edit your List and ListContainer to render the LoginFormContainer above the CreateFormContainer if the user property of the redux state is falsey.
// An empty string is falsey. The CreateFormContainer should only be rendered if state.user is truthy.
