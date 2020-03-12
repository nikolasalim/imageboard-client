import React from "react";
import { connect } from "react-redux";
import { editImage } from "../actions/actions";
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
    // this.stage.displayingForm = !this.stage.displayingForm;
    this.setState({
      ...this.state,
      displayingForm: !this.state.displayingForm
    });
    console.log("form displaying is now:", this.state.displayingForm);
  };

  onChange = event => {
    console.log("this.state.updating is now:", this.state.updating);
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
    console.log("this.state - beginning of submit:", this.state);
    this.props.editImage(this.state.updating, this.props.imageId);
    this.setState({
      ...this.state,
      updating: {
        title: "",
        url: ""
      }
    });
    console.log("this.state - end of submit:", this.state);
  };

  render() {
    if (this.state.displayingForm) {
      return (
        <div>
          <EditForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
          <button onClick={this.clickHandler}>Hide form</button>
        </div>
      );
    } else {
      return <button onClick={this.clickHandler}>Show form</button>;
    }
    // return (
    //   <EditForm
    //     onSubmit={this.onSubmit}
    //     onChange={this.onChange}
    //     values={this.state}
    //   />
    // );
  }
}

// if (this.state.displayingForm) {
//   return (
//     <div>
//       <EditFormContainer imageId={image.id} />
//       <button onClick={this.clickHandler}>Hide form</button>
//     </div>
//   );
// } else {
//   return <button onClick={this.clickHandler}>Show form</button>;
// }

export default connect(null, { editImage })(EditFormContainer);

// class EditFormContainer extends React.Component {
//   state = {
//     title: "",
//     url: ""
//   };

//   onChange = event => {
//     console.log("this.state is now:", this.state);
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   onSubmit = event => {
//     event.preventDefault();
//     console.log("this.state - beginning of submit:", this.state);
//     this.props.editImage(this.state, this.props.imageId);
//     this.setState({
//       title: "",
//       url: ""
//     });
//     console.log("this.state - end of submit:", this.state);
//   };

//   render() {
//     return (
//       <EditForm
//         onSubmit={this.onSubmit}
//         onChange={this.onChange}
//         values={this.state}
//       />
//     );
//   }
// }
