import React from "react";
import { getUsers } from "../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  imageCounter = collection => {
    const urls = [];

    const countResult = collection.reduce((acc, image) => {
      if (!urls.includes(image.url)) {
        urls.push(image.url);
        acc[image.url.toString()] = 1;
        return acc;
      } else {
        acc[image.url.toString()]++;
        return acc;
      }
    }, {});

    const entries = Object.entries(countResult);
    const mostFrequentImage = entries.reduce((a, b) => {
      const [aKey, aValue] = a;
      const [bKey, bValue] = b;

      if (aValue > bValue) {
        return a;
      } else {
        return b;
      }
    });

    return mostFrequentImage;
  };

  render() {
    return (
      <div>
        <h2>Most featured image:</h2>
        <img
          src={this.imageCounter(this.props.images)[0]}
          style={{ maxWidth: "200px" }}
        ></img>

        <p>Posted {this.imageCounter(this.props.images)[1]} times</p>

        <h2>Latest featured image:</h2>
        <img src={this.props.images[0].url} style={{ maxWidth: "200px" }}></img>
        <h3>{this.props.images[0].title}</h3>
        <p>
          Posted by{" "}
          {this.props.usersList.map(user => {
            if (user.id === this.props.images[0].userId) {
              return user.email;
            }
          })}{" "}
          at {new Date(this.props.images[0].createdAt).toTimeString()}
        </p>
        <div>
          <h2>Check all our users:</h2>
          {this.props.usersList.map(user => {
            return (
              <Link to={`/user/${user.id}`}>
                <div>{user.email}</div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { usersList: state.usersList, images: state.images };
}

const mapDispatchToProps = { getUsers };
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

//#########################################################################################################
//#########################################################################################################
//#########################################################################################################
//#########################################################################################################

// import React from "react";
// import { getUsers } from "../actions/actions";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";

// class UsersList extends React.Component {
//   componentDidMount() {
//     this.props.getUsers();
//   }

//   imageCounter = collection => {
//     const urls = [];

//     const countResult = collection.reduce((acc, image) => {
//       if (!urls.includes(image.url)) {
//         urls.push(image.url);
//         acc[image.url.toString()] = 1;
//         return acc;
//       } else {
//         acc[image.url.toString()]++;
//         return acc;
//       }
//     }, {});

//     const entries = Object.entries(countResult);
//     const mostFrequentImage = entries.reduce((a, b) => {
//       const [aKey, aValue] = a;
//       const [bKey, bValue] = b;

//       if (aValue > bValue) {
//         return a;
//       } else {
//         return b;
//       }
//     });

//     return mostFrequentImage;
//   };

//   render() {
//     return (
//       <div>
//         <h2>Most featured image:</h2>
//         <img
//           src={this.imageCounter(this.props.images)[0]}
//           style={{ maxWidth: "200px" }}
//         ></img>

//         <p>Posted {this.imageCounter(this.props.images)[1]} times</p>

//         <h2>Latest featured image:</h2>
//         <img src={this.props.images[0].url} style={{ maxWidth: "200px" }}></img>
//         <h3>{this.props.images[0].title}</h3>
//         <p>
//           Posted by{" "}
//           {this.props.usersList.map(user => {
//             if (user.id === this.props.images[0].userId) {
//               return user.email;
//             }
//           })}{" "}
//           at {new Date(this.props.images[0].createdAt).toTimeString()}
//         </p>
//         <div>
//           <h2>Check all our users:</h2>
//           {this.props.usersList.map(user => {
//             return (
//               <Link to={`/user/${user.id}`}>
//                 <div>{user.email}</div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return { usersList: state.usersList, images: state.images };
// }

// const mapDispatchToProps = { getUsers };
// export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
