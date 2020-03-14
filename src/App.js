import React, { Component } from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import ListContainer from "./components/ListContainer";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/user/:userId" component={UserDetails} />
            <Route path="/user" component={UsersList} />
            <Route path="/" component={ListContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
