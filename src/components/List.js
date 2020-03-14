import React from "react";
import CreateFormContainer from "../components/CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";
import { Link } from "react-router-dom";
import moment from "moment";

class List extends React.Component {
  averageTime = () => {
    const sum = this.props.images.reduce(
      (acc, image) => acc + moment(image.createdAt).valueOf(),
      0
    );
    const average = Math.floor(sum / this.props.images.length);
    console.log("average is", moment(average).format("LLLL"));

    return moment(average).format("LLLL");
  };

  gettingTimeDifference = i => {
    if (moment(i.createdAt).valueOf() > moment(this.averageTime()).valueOf()) {
      return `${moment(i.createdAt).diff(
        moment(this.averageTime()),
        "hours"
      )} hour(s) older than average.`;
    } else {
      return `${moment(this.averageTime()).diff(
        moment(i.createdAt),
        "hours"
      )} hour(s) more recent than average.`;
    }
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
              <div>
                Posted{" "}
                {moment(image.createdAt)
                  .startOf("minute")
                  .fromNow()}
              </div>
              <p>{this.gettingTimeDifference(image)}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default List;

// https://www.youtube.com/watch?v=-sjbZXdGB6M

{
  /* <p>in millisec: {moment(image.createdAt).valueOf()}</p> */
  {
    /* result? {moment(image.createdAt).valueOf() - this.averageTime()} */
  }
}
{
  /* <p>time posted: {moment(image.createdAt).format("LLLL")}</p>
              <p>average: {this.averageTime()}</p> */
}
{
  /* {moment([2007, 0, 29]).diff(moment([2007, 0, 28]), "hours")} */
}
