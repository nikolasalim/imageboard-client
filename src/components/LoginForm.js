import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          name="email"
          value={this.props.values.email}
          onChange={this.props.onChange}
          placeholder="email:"
        ></input>
        <input
          value={this.props.values.password}
          name="password"
          onChange={this.props.onChange}
          placeholder="password:"
        ></input>

        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
