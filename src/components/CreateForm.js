import React from "react";

class CreateForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          value={this.props.values.title}
          name="title"
          onChange={this.props.onChange}
          placeholder="title:"
        ></input>

        <input
          value={this.props.values.url}
          name="url"
          onChange={this.props.onChange}
          placeholder="url"
        ></input>
        <button type="submit">Post</button>
      </form>
    );
  }
}

export default CreateForm;
