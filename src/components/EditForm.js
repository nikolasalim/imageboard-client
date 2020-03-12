import React from "react";

class EditForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          value={this.props.values.title}
          name="title"
          onChange={this.props.onChange}
          placeholder="new title"
        ></input>

        <input
          value={this.props.values.url}
          name="url"
          onChange={this.props.onChange}
          placeholder="new url"
        ></input>
        <button type="submit">Edit</button>
      </form>
    );
  }
}

export default EditForm;
