import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/homepage/HomePage";
import ShopPage from "./Pages/shoppage/ShopPage";
import Header from "./Components/Header/Header";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/SignInAndSignUp";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    const state = {
      currentUser: null,
    };
  }
  unsubscribFromAuth = null;

  componentDidMount() {
    this.unsubscribFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
export default App;
