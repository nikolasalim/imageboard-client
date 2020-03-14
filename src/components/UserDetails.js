import React from "react";
import { getUserImages } from "../actions/actions";
import { connect } from "react-redux";
import EditFormContainer from "./EditFormContainer";

class UserDetails extends React.Component {
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.props.getUserImages(userId);
  }

  state = {
    displayingForm: true
  };

  render() {
    const { userId } = this.props.match.params;

    return (
      <div>
        {this.props.usersList.map(user => {
          if (user.id == userId) {
            return <h1>{user.email}</h1>;
          }
        })}
        {this.props.images.map(image => {
          if (image.userId == userId) {
            return (
              <div key={image.id}>
                <h3>{image.title}</h3>
                <img src={image.url} style={{ maxWidth: "200px" }}></img>
                <EditFormContainer imageId={image.id} />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { images: state.images, user: state.user, usersList: state.usersList };
}

const mapDispatchToProps = { getUserImages };
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
