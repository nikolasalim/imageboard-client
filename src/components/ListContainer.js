import React from "react";
import { getImages } from "../actions/actions";
import { connect } from "react-redux";
import List from "./List";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    console.log();
    return <List images={this.props.images} user={this.props.user} />;
  }
}

function mapStateToProps(state) {
  return { images: state.images, user: state.user };
}

const mapDispatchToProps = { getImages };
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
