import React from "react";
import { connect } from "react-redux";
import { editImage, deleteImage } from "../actions/actions";
import EditForm from "./EditForm";

class EditFormContainer extends React.Component {
  state = {
    updating: {
      title: "",
      url: ""
    },
    displayingForm: true
  };

  clickHandler = () => {
    this.setState({
      ...this.state,
      displayingForm: !this.state.displayingForm
    });
  };

  onChange = event => {
    this.setState({
      ...this.state,
      updating: {
        ...this.state.updating,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.editImage(this.state.updating, this.props.imageId);
    this.setState({
      ...this.state,
      updating: {
        title: "",
        url: ""
      }
    });
  };

  onDelete = event => {
    event.preventDefault();

    const deletedImage = this.props.images.find(
      image => image.id === this.props.imageId
    );

    this.props.deleteImage(deletedImage, this.props.imageId);
    // const updatedImages = this.props.images.filter(
    //   image => image.id !== this.props.imageId
    // );
    // console.log("updatedImages before:", updatedImages);
    // console.log("this.props.images is:", this.props.images);
  };

  render() {
    if (this.state.displayingForm) {
      return (
        <div>
          <EditForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            onDelete={this.onDelete}
          />
          <button onClick={this.clickHandler}>Hide form</button>
        </div>
      );
    } else {
      return <button onClick={this.clickHandler}>Show form</button>;
    }
  }
}

function mapStateToProps(state) {
  return { images: state.images };
}

export default connect(mapStateToProps, { editImage, deleteImage })(
  EditFormContainer
);
