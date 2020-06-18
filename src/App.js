import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/homepage/HomePage";
import ShopPage from "./Pages/shoppage/ShopPage";
import Header from "./Components/Header/Header";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/SignInAndSignUp";

function App() {
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

export default App;
